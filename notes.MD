# Tech Stack

- ### Node / NPM
  - NodeJS is the server side language and engine that drives our project.
  - NPM (Node Package Manager) will be used to manage our dependencies.
- ### Redis
- Redis is a NoSql Key Value Pair Store. It is incredibly fast and for that reason, will handle our data caching.
- We will use the "redis" npm package to give us a nice api that will make communicating with a redis db much easier.
- ### Express
  - Express is a framework for nodejs that gives us a programmatic solution to creating web based applications. It will handle our routing.
- ### SWAPI - The Star Wars API
  - We are using this express project as a proxy server to query data from SWAPI.
  - https://www.swapi.tech
  - https://github.com/semperry/swapi
  - ryan.curtis88@gmail.com

# Folder Structure

- config

  - The config folder holds any configurations for particular set ups (db connections in this case). Might also be named the "app" directory.

- middleware

  - Middleware is a function that receives the request, response, and the "next" middleware (in line) from Express.
  - IE: Authentication before hitting a route, cors policies, cache checking, etc. Anything that needs to intercept the request before hitting the actual ednpoint.
  - Middleware can manipulate the request object and even send a response before ever hitting the route.
  - Here, we're using custom middleware called 'checkCache', for example. There are built in middlewares in express as well.

- node_modules

- routes

  - This directory will hold all of our endpoints. We will use the built in router through express for each separate root route we want to hit.

- index.js

  - The index.js file is our entrypoint. This will define our initial middleware including the routes to use, and spin up our Express server.

- .gitignore

- package.json / package.lock
