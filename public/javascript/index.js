$(()=> {

  getAllMenuItems().then(function( json ) {
    console.log(json);
    menuItems.addItems(json);
    views_manager.show('menuItems');
  });
});

const cartItems = {};

$("main").on("click", '.add-to-cart', function() {


  event.preventDefault(); // Prevent the default action of the link

  // Get the parent element containing the item details
  let menuItem = $(this).closest('.menu-item'); // selecting html

  let itemData = menuItem.data('item'); // retrieving data for that item

 // If itemData is a JSON string, parse it to an object
  if (typeof itemData === 'string') {
    itemData = JSON.parse(itemData);
  }


  // For demonstration purposes, log the item object
  // console.log('Item Data:', itemData);
  // const currentCart = JSON.parse(window.localStorage.getItem('cartItems'));
  // window.localStorage.setItem('cartItems', JSON.stringify({...currentCart, [itemData.id]:itemData}));

  let currentCart = JSON.parse(window.localStorage.getItem('cartItems'));

  if(!currentCart) {
      currentCart = {
            restaurantId: 1,
            items: {}
      }
  }
  if(!currentCart.items[itemData.id]) {
    currentCart.items[itemData.id] = itemData;
    currentCart.items[itemData.id].quantity = 1;
  } else {
    currentCart.items[itemData.id].quantity ++;
  }


  localStorage.setItem('cartItems', JSON.stringify(currentCart));


});
