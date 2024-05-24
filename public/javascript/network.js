
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
  });
}
