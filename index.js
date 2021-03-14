// External library imports
const express = require("express");
const cors = require("cors");

// In structure imports
const swapiRoutes = require("./routes/swapiRoutes");

// Set up the active port to listen on Heroku's servers (when published, it's under the environment variable "PORT"), or our local port '4000' (can be whatever you want)
const port = process.env.PORT || 4000;

// Instantiate express
const app = express();

// Set up the Cors middleware (for a good lecture, do this after the first intial heroku push). This should be on top of the 'routes' middleware so our app will run it on all of our routes.
app.use(
	cors({
		allowedHeaders: "Access-Control-Allow-Origin",
	})
);
// Set up our routes middleware. This can define a root path (ie. "/", "/api" etc), or as is it will default to "/". Each endpoint in the swapiRoutes file will live at this root.
app.use(swapiRoutes);
// Spin up the server. The listen method in express creates an http server for us so we don't need to with plain js.
app.listen(port, () => {
	console.log(`Redis cache server running on port ${port}`);
});

/* NOTES:
 1) Import express
 2) Define the port
 3) Instantiate express
 4) Set up listener
 5) Run 'npm run devStart' in terminal to test that the server starts up
 5) Create and Import Routes from swapiRoutes.js (see readme)
 6) Test Route
 7) Heroku and Cors
*/
