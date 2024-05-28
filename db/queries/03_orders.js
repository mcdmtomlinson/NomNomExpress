const {query} = require('./index.js');


/**
 * Get a single user from the database given their id.
 * @param {Number} id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const createOrder = async(clientsId, restaurantId) => {
  return query(
    `INSERT INTO orders (client, restaurant_id, date) VALUES
    ($1, $2, NOW()) RETURNING *`,
    [clientsId, restaurantId ]
  )
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const createOrderDetails = (cart) => {
  return query(
    `INSERT INTO order_details (order_id, menu_item_id, quantity, special_requests, price) VALUES
    ($1, $2, $3, $4, $5) RETURNING *`,
    [cart.order_id, cart.menu_item_id, cart.quantity, cart. special_requests, cart.price]
  )
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const getOrderDetails = (orderId) => {
  return query(`SELECT * FROM order_details WHERE order_id = $1`, [orderId])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { createOrder, createOrderDetails, getOrderDetails };
