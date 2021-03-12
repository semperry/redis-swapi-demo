const express = require("express");

const corsConfig = require("./config/corsConfig");
const swapiRoutes = require("./routes/swapiRoutes");

const port = process.env.PORT || 4000;
const app = express();

app.use([corsConfig, swapiRoutes]);

app.listen(port, () => {
	console.log(`Redis cache server running on port ${port}`);
});
