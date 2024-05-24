
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
      <nav id="page-header__user-links" class="page-header__user-links page-header">
          <h1>NomNomExpress</h1>
          <p class="home">Home</p>
          <p class="login_button">Log In</p>
          <p class="sign-up_button">Sign Up</p>
          <button id="cart">cart</button>
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

  // This line appends the header to the page (temporary)
  // because the update function, which is globally accessible and defined here,
  // appends html to the id page-header
  // window
  window.header.update()



});
