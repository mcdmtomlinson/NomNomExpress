
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
 * @param {*} cart
 * @returns ajax
 */
function createOrder(cart) {
  const url = '/api/orders'
  return $.ajax({
    method: 'POST', url, data:cart
  })
};
