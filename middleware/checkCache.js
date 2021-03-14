const redis_client = require("../config/redisConfig");

module.exports = checkCache = (req, res, next) => {
	const { slug, id } = req.params;

	redis_client.get(`${slug}:${id}`, (err, data) => {
		if (err) {
			console.log(err);
			res.status(500).send(err);
		}

		if (data != null) {
			res.json({ ...JSON.parse(data), fromCache: true });
		} else {
			next();
		}
	});
};

/* NOTES:
1) Create redisConfig.js in config folder (See redisConfig.js)
2) Import reds_client from redisConfig file
3) Export an arrow function (checkCache).
4) This script checks the redis db for the key we named in the swapiRoutes get method. 
	4a) If the key exists, it will send that cached data instead of hitting the original route and fetching data from swapi
	4b) If it does not exist it will call the "next()" method, which calls the next middleware in express. In this case, the callback method in our swapiRoutes get method ((req, res) => ....)

*/
