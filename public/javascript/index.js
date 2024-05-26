$(()=> {
  // views_manager.show('home');
  // views_manager.show('menuItems');



  //Calling getAllMenuItems function, defined in network.js.
  // Initiates an AJAX request to the server at the URL /api/menItems?params
  // Returning Promise using json object as param
  getAllMenuItems().then(function( json ) {
    console.log(json);
    menuItems.addItems(json); // supposed to be json.properties
  /// Call global function show from views_manager object, with listings as parameter
  // This will append $propertyListings to #main
    views_manager.show('menuItems');
  });
});

$("main").on("click", '.add-to-cart', function() {


  event.preventDefault(); // Prevent the default action of the link

  // Get the parent element containing the item details
  let menuItem = $(this).closest('.menu-item');

  let itemData = menuItem.data('item');

 // If itemData is a JSON string, parse it to an object
  if (typeof itemData === 'string') {
    itemData = JSON.parse(itemData);
  }

  // For demonstration purposes, log the item object
  console.log('Item Data:', itemData);

  // Need help from Alex understanding where this data will go
  // ClientId still missing
  // Ability to remove items from cart still missing (or not available here)
  createCartItem(itemData)






});
