/*
 * All routes for Orders are defined here
 * file needs to be loaded in server.js into api/restaurants,
 *   these routes are mounted onto /restaurants
 * Refer to: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
const {sendSMS} = require('../utils/send-messages');
const express = require('express');
const router  = express.Router();
// const authMiddleware = require("../middleware/auth-middleware");
// const { sendMessage } = require("../helpers/sendMessage");
const moment = require('moment');
const { createOrder, createOrderDetails, getOrderDetails, deleteCompletedOrder } = require('../db/queries/03_orders');




// Required restaurant to be logged in to access order routes
/* router.use((req, res, next) => {
  authMiddleware(req, res, next);
}); */

module.exports = (database) => {
  // Get all orders and all required details for orders index,
  // then render views/restaurants/orders_index.ejs with orders data
  router.get("/", (req, res) => {
    database.getAllOrders()
      .then(orders => {
        orders.forEach((order, i) => {
          orders[i].order_date = moment(order.order_date).format('dddd, MMMM Do YYYY, h:mm:ss a');
        });
        res.render('restaurants/orders_index', { orders, ...req.defaultVars });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // Get details for a single order and all required fields for order detail
  // then render views/restaurants/orders_detail.ejs with order data
  router.get("/:id", (req, res) => {
    database.getOrderWithId(req.params.id)
      .then(order => {
        order.order_date = moment(order.order_date).format('dddd, MMMM Do YYYY, h:mm:ss a');
        res.render('restaurants/orders_detail.ejs', { order, ...req.defaultVars });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // Update order status and send text message to customer
  router.post("/:id/update", (req, res) => {
    // If the restaurant updates the confirmed status and add estimated pickup time
    if (req.body.confirmed) {
      database.confirmOrder([req.body.estimated_pickup, req.params.id])
        .then(() => database.getOrderWithId(req.params.id))
        .then(order => {
          console.log(`Order ${req.params.id} confirmed`);
          const confirmedBody = `Hey ${order.customer_name}, your order from ${order.restaurant_name} has been confirmed and is being prepared! The estimated pickup time is ${order.estimated_pickup}. You'll receive another text message when your order is ready for pickup.`;
          // sendMessage(`+1${order.customer_phone_number}`, `+1${order.restaurant_phone_number}`, confirmedBody);
          res.redirect(`/orders/${order.id}`);
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
    }
    // If the restaurant updates the confirmed status and add estimated pickup time
    if (req.body.completed) {
      database.completeOrder(req.params.id)
        .then(() => database.getOrderWithId(req.params.id))
        .then(order => {
          console.log(`Order ${req.params.id} completed`);
          const completedBody = `Hey ${order.customer_name}, your order from ${order.restaurant_name} is ready for pickup! Order number: #${order.id}`;
          //sendMessage(`+1${order.customer_phone_number}`, `+1${order.restaurant_phone_number}`, completedBody);
          res.redirect(`/orders/${order.id}`);
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
    }
  });
  // Ryan this is how my route is going to look like
  router.post('/', (req, res) => {
    const data = req.body;

    createOrder(data.clientId, data.restaurantId)
      .then((order) => {
        const orderDetailsPromises = [];

        for (let x in data.items) {
          const orderDetailsData = {
            'order_id': order.id,
            'menu_item_id': data.items[x].id,
            'quantity': data.items[x].quantity,
            'special_requests': data.items[x].specialRequests,
            'price': data.items[x].price
          };
          orderDetailsPromises.push(createOrderDetails(orderDetailsData));
        }

        return Promise.all(orderDetailsPromises)
          .then(() => {
            const message = `Hey! Your NomNomExpress order ${order.id} has landed at NomNom! Our chefs are on it like ninjas on noodles 🥷🍜. Stay tuned, deliciousness is in the making! 😋✨`;
            sendSMS(message);
            return res.sendStatus(200);
          });
      })
      .catch((error) => {
        console.error("Error processing order: ", error);
        return res.sendStatus(500);
      });
  });


  router.delete('/complete/:id', (req, res) => {
    const orderId = req.params.id;
    return deleteCompletedOrder(orderId)
      .then(() =>{
        sendSMS('"Hey there, foodies! Your delicious NomNom order is ready to pick up. Come and get it before it starts flirting with the other meals!" 🍔😋');
        return res.sendStatus(203);
      });

  });

  return router;
};
