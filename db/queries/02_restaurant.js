const {query} = require('./index.js');


/**
 * Get a single user from the database given their id.
 * @param {Number} id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getAllItems = () => {
  return query(
    `SELECT * FROM menu_items`,
  )
    .then((result) => {
      console.log(result.rows, 'rows');
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

/**
 * Get a single user from the database given their id.
 * @param {Number} id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getMenuItem = (id) => {
  return query(
    `SELECT * FROM menu_items
    WHERE id = $1`,
    [id]
  )
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { getAllItems, getMenuItem };
