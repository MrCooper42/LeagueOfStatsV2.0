// */app/routes.js*

// ## Node API Routes

// Define routes for the Node backend

// Load our API routes for user authentication
import authRoutes from './routes/_authentication.router.js';

// Load our API routes for the `summonerRoutes` component
import summonerRoutes from './routes/_summoner.router.js';

// Load our API routes for the `statsRoutes` component
import statsRoutes from './routes/_stats.router.js';

// Load our API routes for the `matchesRoutes` component
import matchesRoutes from './routes/_matches.router.js';

// Load our API routes for the `recipe` component
import recipeRoutes from './routes/_recipe.router.js';

export default (app, router, passport) => {

  // ### Express Middlware to use for all requests
  router.use((req, res, next) => {

    console.log('I sense a disturbance in the force...'); // DEBUG

    // Make sure we go to the next routes and don't stop here...
    next();
  });

  // Define a middleware function to be used for all secured routes
  let auth = (req, res, next) => {

    if (!req.isAuthenticated())
      res.send(401);

    else
      next();
  };

  // Define a middleware function to be used for all secured administration
  // routes
  let admin = (req, res, next) => {

    if (!req.isAuthenticated() || req.user.role !== 'admin')
      res.send(401);

    else
      next();
  };

  // ### Server Routes

  // Handle things like API calls,

  // #### Authentication routes

  // Pass in our Express app and Router.
  // Also pass in auth & admin middleware and Passport instance
  authRoutes(app, router, passport, auth, admin);

  // #### RESTful API Routes

  // Pass in our Express app and Router
  summonerRoutes(app, router);

  statsRoutes(app, router);

  matchesRoutes(app, router);

	recipeRoutes(app, router);

	// All of our routes will be prefixed with /api
	app.use('/api', router);

  // ### Frontend Routes

  // Route to handle all Angular requests
  app.get('*', (req, res) => {

    // Load our src/app.html file
    //** Note that the root is set to the parent of this folder, ie the app root **
    res.sendFile('/dist/index.html', { root: __dirname + "/../"});
  });
};
