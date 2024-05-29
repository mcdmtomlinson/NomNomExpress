
// Initiates an AJAX request to the server at the URL /api/menuItems
// using the GET method by default.
function getAllMenuItems(params) {
  let url = "/api/users/menuItems";
  if (params) {
    // Indicated an added query to URL, for params
    url += "?" + params;
  }
  return $.ajax({
    url,
  })
    .done(function(data) {
      console.log("Success:", data);
    });
}

/**
 * Sends the cart content to the backend using a POST method
 * to the route /api/orders
 * @param {*} data
 * @returns ajax
 */
function createOrder(data) {
  const url = '/orders';
  return $.ajax({
    url,
    method: 'POST',
    data,
    success: function(response) {
      views_manager.show('orderSuccesful');
      localStorage.removeItem('cartItems');
    },
    error: function(error) {
      console.log('Error confirming order; ', error);
    }
  });
}

function orderComplete(orderId) {
  const url = `/orders/complete/${orderId}`;
  return $.ajax({
    url,
    method: 'DELETE',
    success: function(response) {
      views_manager.show('orderCompleted')
    },
    error: function(error) {
      console.log('Error confirming order; ', error);
    }
  });
}

function getOrderForRestaurant() {
  const url = `/orders`;
  return $.ajax({
    url,
    method: 'GET',
    success: function(response) {
    },
    error: function(error) {
      console.log('Error confirming order; ', error);
    }
  });
}
