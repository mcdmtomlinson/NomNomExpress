$(()=> {

  getAllMenuItems().then(function( json ) {
    console.log(json);
    menuItems.addItems(json);
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
