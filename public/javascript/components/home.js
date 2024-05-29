$(() => {

  // This is rendering a 'Home Page', with a button for cart
  // Ryan - I moved the title and button to header temporarily
  const $home = $(`
  <div class="px-4 py-5 my-5 text-center">
    <img class="d-block mx-auto mb-4" src="/assets/nomnom_logo-removebg-preview.png" alt="" width="250" height="198">
    <h1 class="display-5 fw-bold text-body-emphasis">NomNom-Express</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Welcome to NomNom-Express, your go-to app for ordering mouthwatering food for pickup! Explore local restaurants, place orders effortlessly, and enjoy convenient pickups without the wait. With NomNom-Express, satisfying your cravings is just a tap away. Download now and elevate your pickup experience!</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Menu</button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4">Orders</button>
      </div>
    </div>
  </div>

  `);
  window.$home = $home;

});

