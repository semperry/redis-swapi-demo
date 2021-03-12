// Import redis
const redis = require("redis");

// Grab redis_port from the environment (heroku), or default port for local instance (6379)
const redis_port = process.env.REDIS_URL || 6379;
// Connect to the redis instance
const redis_client = redis.createClient(redis_port);

// Export the connected client
module.exports = redis_client;
