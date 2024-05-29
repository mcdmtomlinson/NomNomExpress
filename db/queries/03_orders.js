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

const deleteCompletedOrder = (orderId) => {
  return query(`DELETE FROM orders WHERE id = $1`, [orderId])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const getOrderForRestaurant = () => {
  return query(`
  SELECT orders.id AS order_id, users.name AS client_id, restaurants.name AS restaurant_id, SUM(order_details.quantity * order_details.price) AS total, string_agg(CONCAT(order_details.quantity, ' ',menu_items.name), ', ') AS order_details
  FROM orders
  JOIN order_details ON order_details.order_id = orders.id
  JOIN menu_items ON order_details.menu_item_id = menu_items.id
  JOIN users ON orders.client = users.id
  JOIN restaurants ON restaurants.id = orders.restaurant_id
  GROUP BY orders.id, users.name, restaurants.name
  ORDER BY orders.id
  `)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { createOrder, createOrderDetails, getOrderDetails, deleteCompletedOrder, getOrderForRestaurant };
