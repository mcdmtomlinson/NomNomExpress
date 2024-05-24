
$(() => {
  window.header = {};

  // Connecting to id page-header in index.html
  const $pageHeader = $('#page-header');
  let currentUser = null;
  //Defining updateHeader(user) function
  function updateHeader(user) {
    currentUser = user;
    $pageHeader.find("#page-header__user-links").remove();
    let userLinks;

    if (!user) {
      // building navigation
      userLinks = `
<<<<<<< HEAD
      <nav id="page-header__user-links" class="page-header__user-links page-header">
          <h1>NomNomExpress</h1>
          <p class="home">Home</p>
          <p class="login_button">Log In</p>
          <p class="sign-up_button">Sign Up</p>
          <button id="cart">cart</button>
=======
      <nav id="page-header__user-links" class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
          <li class="nav-item" id="home" >Home</li>
          <li class="nav-item" id="menu" >Menu</li>
          <li class="nav-item">Log In</li>
          <li class="nav-item">Sign Up</li>
          <li class="nav-item" id="cart">Check out</li>
        </ul>
>>>>>>> master
      </nav>
      `;
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
      `;
    }
    // Appending nav to the page
    $pageHeader.append(userLinks);
  }

  // Allowing the function updateHeader to be accessed globally
  window.header.update = updateHeader;

<<<<<<< HEAD
  // This line appends the header to the page (temporary)
  // because the update function, which is globally accessible and defined here,
  // appends html to the id page-header
  // window
  window.header.update()

=======
  // Calling function getMyDetails to render header
  updateHeader(null);


  // If home in the header is clicked, append $menuItems to #main
  $("header").on("click", '#menu', function() {
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
>>>>>>> master

  $('header').on('click', '#cart',function() {
    views_manager.show('cart');
    cart.displayCart();
  });

  $('header').on('click', '#home',function() {
    views_manager.show('home');
  });



});
