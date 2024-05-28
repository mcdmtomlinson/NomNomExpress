
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
      <nav id="page-header__user-links" class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
          <li class="nav-item" id="home" >Home</li>
          <li class="nav-item menu" id="menu" >Menu</li>
          <li class="nav-item">Log In</li>
          <li class="nav-item">Sign Up</li>
          <li class="nav-item" id="cart">Check out</li>
        </ul>
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

  // Calling function getMyDetails to render header
  updateHeader(null);


  // If menu in the header is clicked, append $menuItems to #main
  $('header').on("click", '.menu', function() {
    console.log('.menu was clicked');
    views_manager.show('menu');
  });

  $('header').on('click', '#cart',function() {
    views_manager.show('cart');
  });

  $('header').on('click', '#home',function() {
    console.log('#home was clicked');
    views_manager.show('home');
  });



});
