// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const db = require("./db/queries/index");
const PORT = process.env.PORT || 8080;
const app = express();

// For server side rendering?
// app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

// Custom middleware- Compiles SASS into CSS so Browser can understand it. Automatically compiled when some makes a request for the file
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);


app.use(express.static('public'));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
// const userApiRoutes = require('./routes/users-api');
// const widgetApiRoutes = require('./routes/widgets-api');
// const usersRoutes = require('./routes/users');
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
// const usersRoutes = require('./routes/users');
// const restaurantsRoutes = require("./routes/restaurants"); // restaurant (singular? Correct path?)
// const ordersRoutes = require("./routes/orders"); // order (singular? Correct path?)
// const restaurantsRoutes = require("./routes/restaurants");
const ordersRoutes = require("./routes/order");


// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
// app.use('/api/users', userApiRoutes);
// app.use('/api/widgets', widgetApiRoutes);
// app.use('/users', usersRoutes);
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
// app.use('/users', usersRoutes);
// app.use("/api/restaurants", restaurantsRoutes(db)); // restaurant (singular? Correct path?)
// app.use("/orders", ordersRoutes(db)); // order (singular? Correct path?)
// app.use("/api/restaurants", restaurantsRoutes(db));
app.use("/orders", ordersRoutes(db));
// Note: mount other resources here, using the same pattern above
// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
