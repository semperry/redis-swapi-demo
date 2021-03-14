// Create a router object with epxress. This will allow us to add endpoints to our web app
const router = require("express").Router();
// Import axios for our request to swapi
const axios = require("axios");

// Import middleware. This is going to be responsible for intercepting the request and check if the data we want lives in the cache already.
const checkCache = require("../middleware/checkCache");
// Import redis configuration
const redis_client = require("../config/redisConfig");

// Define a route. The ':' represents a url parameter, not a literal word. Pass in the 'checkCache' middleware AFTER you've tested the route by itself.
router.get("/:slug/:id", checkCache, async (req, res) => {
	try {
		const { slug, id } = req.params;

		const swapiInfo = await axios.get(
			`https://www.swapi.tech/api/${slug}/${id}`
		);
		const swapiData = swapiInfo.data;

		redis_client.setex(`${slug}:${id}`, 60, JSON.stringify(swapiData));
		return res.json(swapiData);
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
});

// Export the router object for use in our app
module.exports = router;

/* NOTES:
1) Import external dependencies first (express router, axios)
2) Set up the Route first. You won't need the 'checkCache' function as the second argument yet. I like to do a 'Hello from App' type of route before anything.
3) Export router
4) Import into index.js and pass it as middleware to app (see index.js)
5) Test the route with browser for succesful ping
6) Add try / catch block code, EXCLUDING line 21 (redis_client.setex....). This sets the cache and should come after. Just do the axios request and response to browser.
7) Test route
8) Set up cache. Create 'checkCache' middleware in middleware folder. (see 'checkCache.js').
9) Import checkCache.
10) Import redis_client. (This will be set up in the checkCache creation).
11) Pass in the checkCache function as the second argument to the router.get() method.
12) Add line 21 (sets the cache). The 'setex' method takes in the key name, time to live in seconds, and the payload as a string.
13) Test route twice. Once to get the data, then refresh browser to see the difference when it comes from the cache.
*/
