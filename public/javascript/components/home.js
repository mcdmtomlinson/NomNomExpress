$(() => {

  // This is rendering a 'Home Page', with a button for cart
  // Ryan - I moved the title and button to header temporarily
  const $home = $(`
<<<<<<< HEAD
  <h1>NomNomExpressHOME</h1>
<ul>
  <button id="cart">cart</button>
</ul>
  `);
  window.$home = $home;

  $home.on('click', '#cart',function() {
    console.log('here');
    views_manager.show('cart');
  });

=======
  <h1>NomNomExpress</h1>
  `);
  window.$home = $home;

>>>>>>> master
});

