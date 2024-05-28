/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/01_users');
const restaurantQueries = require('../db/queries/02_restaurant');

router.get('/', (req, res) => {
  userQueries.getUsers()
    .then(users => {
      res.json({ users });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

});


//// ROUTE TO GET MENU ITEMS

// GET request is made to /menuItems
router.get("/menuItems", (req, res) => {
  // In addition to the menu items object, I want to send
  // clientID


  // Calling getAllMenuItems from DATABASE.JS
  // Get all menuItems,(not including user input from form - STRETCH)
  restaurantQueries
    // returns a promise that resolves to the rows returned by the query
    .getAllItems()
    // sends a response containing the retrieved properties data back to the client
    // as a JSON object
    .then((menuItems) =>{
      console.log(menuItems, 'backend');
      return res.send({ menuItems });
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});


module.exports = router;
