$(() => {

  const $home = $(`
  <h1>NomNomExpress</h1>
<ul>
  <button id="cart">cart</button>
</ul>
  `);
  window.$home = $home;

  $home.on('click', '#cart',function() {
    views_manager.show('cart');
    cart.displayCart();
  });


});

