
// Initiates an AJAX request to the server at the URL /api/menuItems
// using the GET method by default.
function getAllMenuItems(params) {
  let url = "/api/menuItems";
  if (params) {
    // Indicated an added query to URL, for params
    url += "?" + params;
  }
  return $.ajax({
    url,
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
    method:'POST',
    data,
    success: function(response) {
      views_manager.show('orderSuccesful');
    },
    error: function(error) {
      console.log('Error confirming order; ', error);
    }
  });
}
