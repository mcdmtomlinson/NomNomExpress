const {query} = require('./index.js');


/**
 * Get a single user from the database given their id.
 * @param {Number} id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUsersWithId = (id) => {
  return query(
    `SELECT name, email, phone, address, picture, password, promotions FROM users
      WHERE id = $1`,
    [id])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { getUsersWithId };
