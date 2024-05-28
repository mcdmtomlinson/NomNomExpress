$(()=> {

  getAllMenuItems().then(function(json) {
    console.log(json);
    menuItems.addItems(json);
    views_manager.show('menuItems');
  });
});

const cartItems = {};

$("main").on("click", '.add-to-cart-btn', function() {


  event.preventDefault(); // Prevent the default action of the link

  // Get the parent element containing the item details
  let menuItem = $(this).closest('.menu-item'); // selecting html

  let itemData = menuItem.data('item'); // retrieving data for that item

  // If itemData is a JSON string, parse it to an object
  if (typeof itemData === 'string') {
    itemData = JSON.parse(itemData);
  }

// Retrieve the current cart items stored in browser's local storage under the key cartItems
// Convert the JSON string retrieved from local storage into a JavaScript object.
  let currentCart = JSON.parse(window.localStorage.getItem('cartItems'));

  //If no cart items are stored yet.
  if(!currentCart) {
    // Create a new cart object
      currentCart = {
            restaurantId: 1,
            items: {}
      }
  }

  // If the item does not exist in the cart..
  if(!currentCart.items[itemData.id]) {
    // Add the item to the cart
    currentCart.items[itemData.id] = itemData;
    // Set the quantity to 1
    currentCart.items[itemData.id].quantity = 1;
  } else {
    // Add 1 to quantity
    currentCart.items[itemData.id].quantity ++;
  }

  // Selecting html of quantity and rendering it dynamically
  let $menuItemQuantity = menuItem.find(".quantity");
  $menuItemQuantity.text(JSON.stringify(currentCart.items[itemData.id].quantity))

  // converts the updated currentCart object back into a JSON string and saves it
  // in the browser's local storage under the key cartItems.
  localStorage.setItem('cartItems', JSON.stringify(currentCart));




});

$("main").on("click", '.add-to-cart-btn-decrease', function() {


  event.preventDefault(); // Prevent the default action of the link

  // Get the parent element containing the item details
  let menuItem = $(this).closest('.menu-item'); // selecting html

  let itemData = menuItem.data('item'); // retrieving data for that item

 // If itemData is a JSON string, parse it to an object
  if (typeof itemData === 'string') {
    itemData = JSON.parse(itemData);
  }

// Retrieve the current cart items stored in browser's local storage under the key cartItems
// Convert the JSON string retrieved from local storage into a JavaScript object.
  let currentCart = JSON.parse(window.localStorage.getItem('cartItems'));

  //If no cart items are stored yet.
  if(!currentCart) {
    // Create a new cart object
      currentCart = {
            restaurantId: 1,
            items: {}
      }
  }

  // If the item does not exist in the cart..
  if(!currentCart.items[itemData.id]) {
    // Add the item to the cart
    currentCart.items[itemData.id] = itemData;
    // Set the quantity to 1
    currentCart.items[itemData.id].quantity = 1;
  } else if (currentCart.items[itemData.id].quantity > 0){
    // Subtract 1 from quantity
    currentCart.items[itemData.id].quantity --;
  }


  // Selecting html of quantity and rendering it dynamically
  let $menuItemQuantity = menuItem.find(".quantity");
  $menuItemQuantity.text(JSON.stringify(currentCart.items[itemData.id].quantity))

  // converts the updated currentCart object back into a JSON string and saves it
  // in the browser's local storage under the key cartItems.

  localStorage.setItem('cartItems', JSON.stringify(currentCart));




});
