$(() => {
  // local variable to this file only (out of scope in other files)
  const $menuItems = $(`
  <section class="menu-items" id="menu-items">
      <p>Loading...</p>
    </section>
  `);
  // html kept as global variable
  window.$menuItems = $menuItems;

  // window.views_manager.show('menuItems')




  // global object that stores functinos that you want to apply on a property listings
  window.menuItems = {};

  // Define function addListing, appending 'listing' parameter to $propertyListings html
  function addMenuItem(item) {
    $menuItems.append(item);
  }

  // Define function clearListings, emptying all listings from $propertyListings html

  function clearMenuItems() {
    $menuItems.empty();
  }

  // Setting clearListings as a global function
  window.menuItems.clearListings = clearMenuItems;

  // Define addMenuItems function
  // This function is called in index.js, header.js
  function addItems(items) {
    clearMenuItems();
    for (const itemId in items) {
      // Defining variable property to createListing for that item
      const item = items[itemId];
      // Passsing the result of the function createMenuItem to variable item
      // which adds listing info to html article,
      // specifying if it is a reservation
      const menuItem = window.menuItem.createMenuItem(item);
      // appending listing to $propertyListings html
      addMenuItem(menuItem);
    }
  }
  // creating a new key on object, allowing addProperties to be used globally
  window.menuItems.addItems = addItems;


});
