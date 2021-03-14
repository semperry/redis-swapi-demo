# Tech Stack

- ### Node / NPM
  - NodeJS is the server side language and engine that drives our project.
  - NPM (Node Package Manager) will be used to manage our dependencies.
- ### Redis
- Redis is a NoSql Key Value Pair Store. It is incredibly fast and for that reason, will handle our data caching.
- We will use the "redis" npm package to give us a nice api that will make communicating with a redis db much easier.
- When pushed to Heroku, we'll add-on "Heroku Redis".
- ### Express
  - Express is a framework for nodejs that gives us a programmatic solution to creating web based applications. It will handle our routing.
- ### Cors Middleware
  - CORS - Cross Origin Resource Sharing. We'll use the npm 'cors' package to manage cross origin requests (microservice applications)
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

# Instructions

1. Set up new NPM project

   - Create project folder
   - cd to folder
   - run:
     > npm init --yes
     - This will create a package.json file. The --yes option agrees to all default values in the generator.

2. Install dependencies

   - run:
     > npm install express redis cors axios
   - then:
     > npm install --save-dev nodemon
   - Express provides our web app framework, redis will allow us to communicate with a redis db, cors will allow cross origin requests, and we need axios for our swapi request (node does not have the fetch api built in like browser js)
   - Nodemon is just a dev dependency. It implements hot reloading so we don't have to stop and start our script over and over again.

3. Create Run Scripts

   - In the package.json file, under the 'scripts' object, add:
     > "start": "node index.js"
   - This will run by default when we publish to Heroku once it realizes we're using a node.js buildpack
   - In the same 'scripts' object, add:
     > "devStart": "nodemon index.js"
     - This name is not unique to npm in any way. It is a custom script that will use nodemon to start our project while we're in development.

4. Create Entry point

- By default, the main file should be 'index.js'. We already used this name to define our scripts, so let's follow that pattern
- In the root directory, create a file called index.js

5. Setup project Structure

- Create a 'config' directory
- Create a 'middleware' directory
- Create a 'routes' directory
- Create a '.gitignore' file
  - Add node_modules to your .gitignore
- See notes at the top of this document for info on the structure...

6. Spin up a basic Express Server.

   - See notes in index.js

7. Create Routes File

   - In the routes directory, create a file named swapiRoutes.js
   - See notes in swapiRoutes.js

8. Set up Cache Middleware

   - In the 'middleware' directory, create a file named checkCache.js
   - See notes in checkCache.js

9. Publish to Heroku

- Demonstrate the cache time with the browser
- Ensure there is a start script in the package.json that will run the entrypoint file, or a Procfile that does the same
- Push to Heroku
- Add on "Heroku Redis"
- Add 'CORS' policy
- Push again
  - 'CORS' policy can be done on the first push of course, but it's a good spot to explain cors.
- Test live link
