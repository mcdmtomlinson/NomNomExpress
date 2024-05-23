
$(() => {
  window.header = {};

  // Connecting to id page-header in index.html
  const $pageHeader = $('#page-header');
  let currentUser = null;
  function updateHeader(user) {
    currentUser = user;
    $pageHeader.find("#page-header__user-links").remove();
    let userLinks;

    if (!user) {
      // building navigation
      userLinks = `
      <nav id="page-header__user-links" class="page-header__user-links">
        <ul>
          <li class="home">Home</li>
          <li class="login_button">Log In</li>
          <li class="sign-up_button">Sign Up</li>
        </ul>
      </nav>
      `
    } else {
      // building navigation when user is logged in
      userLinks = `
      <nav id="page-header__user-links" class="page-header__user-links">
        <ul>
          <li class="home">Home</li>

          <li>${user.name}</li>

          <li class="logout_button">Log Out</li>
        </ul>
      </nav>
      `
    }
    // Appending nav to the page
    $pageHeader.append(userLinks);
  }

  // Allowing the function updateHeader to be accessed globally
  window.header.update = updateHeader;

  // Calling function getMyDetails to render header
  getMyDetails()
    .then(function( json ) {
      // updating header with user info, global function
    updateHeader(json.user);
  });


  // If home in the header is clicked, append $menuItems to #main
  $("header").on("click", '.home', function() {
    // global object menuItems that stores functions that you want to apply on menu items
  // call clearMenuItems function, defined in menu.js / menuItems.js
    menuItems.clearListings();
    //Calling getAllMenuItems function, defined in network.js.
    // Initiates an AJAX request to the server at the URL /api/menuItems?params
    getAllMenuItems()
      // Promise using json object as param
      .then(function(json) {
      //Call global function addMenuItems, which is defined in database.js. json.properties as parameter
      // Add all properties
        menuItems.addMenuItems(json.menuItems);
        // Call global function show from views_manager object, with listings as parameter
        // This will append $menuItmes to #main
        views_manager.show('menuItems');
    });
  });


});
