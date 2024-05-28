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




  // global object that stores functinos that you want to apply on a menu item
  window.menuItems = {};

  // Define function addMenuItem, appending 'item' parameter to html #main
  function addMenuItem(item) {
    $menuItems.append(item);
  }

  // Define function clearMenuItems, emptying all listings from $menuItems html

  function clearMenuItems() {
    $menuItems.empty();
  }

  // Setting clearMenuItems as a global function
  window.menuItems.clearListings = clearMenuItems;

  // Define addMenuItems function
  // This function is called in index.js, header.js
  function addItems(items) {
    clearMenuItems();
    // console.log('test', items["menuItems"][0]['name']);
    for (const itemId in items["menuItems"]) {
      // console.log(items["menuItems"][itemId]["name"]);

      // Defining variable item to createMenuItem for that item
      const item = items["menuItems"][itemId];
      // Set quantity property to 0
      // item["quantity"] = 0
      // Passsing the result of the function createMenuItem to variable item
      // which adds listing info to html article,
      const menuItem = window.menuItem.createMenuItem(item);
      // appending menu item to html
      addMenuItem(menuItem);
    }
  }
  // creating a new key on object, allowing addProperties to be used globally
  window.menuItems.addItems = addItems;


});
