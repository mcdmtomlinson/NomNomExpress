$(() => {
  // local variable to this file only (out of scope in other files)
  const $menuItems = $(`
  <section class="menu-items" id="menu-items">
      <p>Loading...</p>
    </section>
  `);
  // html kept as global variable
  window.$menuItems = $menuItems;

  // global object that stores functinos that you want to apply on a property listings
  window.menuItems = {};

  // Define function addListing, appending 'listing' parameter to $propertyListings html
  function addMenuItem(menuItem) {
    $menuItems.append(menuItem);
  }

  // Define function clearListings, emptying all listings from $propertyListings html

  function clearMenuItems() {
    $menuItems.empty();
  }

  // Setting clearListings as a global function
  window.menuItems.clearListings = clearMenuItems;

  // Define addMenuItems function
  // This function is called in index.js, header.js
  function addMenuItems(menuItems) {
    clearMenuItems();
    for (const menuItemId in menuItems) {
      // Defining variable property to createListing for that property
      const item = menuItems[menuItemId];
      // Passing the function createMenuItem to variable listing
      // which adds menu item info to html article,

      const menuItem = menuItem.createMenuItem(item);
      // appending menu item to $menuItems html
      addMenuItem(menuItem);
    }
  }
  // creating a new key on object, allowing addProperties to be used globally
  window.menuItems.addMenuItems = addMenuItems;

});
