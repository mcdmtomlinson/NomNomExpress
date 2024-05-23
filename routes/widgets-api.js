/*
 * All routes for Widget Data are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /api/widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const db = require('../db/connection');

router.get('/', (req, res) => {
  const query = `SELECT * FROM widgets`;
  console.log(query);
  db.query(query)
    .then(data => {
      const widgets = data.rows;
      res.json({ widgets });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });


//// ROUTE TO GET MENU ITEMS

  // GET request is made to /menuItems
router.get("/menuItems", (req, res) => {
  // Calling getAllMenuItems from DATABASE.JS (not network.js)
  // Get all menuItems,(not including user input from form - STRETCH)
  db
    // returns a promise that resolves to the rows returned by the query
    .getAllMenuItems()
    // sends a response containing the retrieved properties data back to the client
    // as a JSON object
    .then((menuItems) => res.send({ menuItems }))
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});


});

module.exports = router;
