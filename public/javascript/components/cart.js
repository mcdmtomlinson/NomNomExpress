$(() => {

  const $cartPage = $(`
  <div>

  </div>
  `);
   const $cartHeader = $(`
   <h1>ORDER SUMMARY</h1>
  <br>
   `);
  const $cartTable = $(`
  <table class="table table-borderless">
  <thead>
  <tr>
    <th>Quantity</th>
    <th>Name</th>
    <th>Subtotal</th>
  </tr>
  </thead>
</table>
  `);

  const $cartTableBody = $(`
  <tbody>
</tbody>
  `);

  const $cartEmpty = $(`
  <div class="empty-cart-container text-center">
  <div class="empty-cart-message font-weight-bold mb-3">
    Oops! Your cart is feeling lonely and empty.
  </div>
  <div class="mb-3">
    <img src="https://thumbs.dreamstime.com/b/sad-udibka-drawn-piece-paper-lies-empty-plate-table-sadness-there-nothing-to-eat-hunger-bad-mood-226878351.jpg" alt="Empty Cart" class="img-fluid">
  </div>
  <div class="mb-3">
    Why not make it happy by adding some delicious items from our NomNom menu?
  </div>
</div>

  `);



  function displayTotal(total) {
    return `
    <div class="d-flex justify-content-around">
    <div> TOTAL: $${total} </div>
    <button id="checkout-button" type="button" class="btn btn-info">Confirm order</button>
    </div>
    `;
  }

  function displayCart() {
    $cartTableBody.empty();
    $cartPage.empty();

    //TODO: retrieve restaurant id from DB
    const cart = new Cart({ restaurantId: 1 });
    const total = cart.getTotal();

    if(cart.cartItems.length === 0) {
      $cartPage.append($cartEmpty);
    } else {
      for (let item of cart.cartItems) {
        const cartItem = window.cartItem.createCartItem(item);
        $cartTableBody.append(cartItem);
      }
      $cartPage.append($cartHeader);
      $cartTable.append($cartTableBody);
      $cartPage.append($cartTable);
      $cartPage.append('<br>');
      $cartPage.append(displayTotal(total));

      //Ryan please send this also
      const data = {items: cart.cartItems, restaurantId:1, clientId:Math.floor(Math.random() * (50 - 1 + 1) + 1)};

      $cartPage.on('click', '#checkout-button', function() {
        createOrder(data);
        $cartPage.empty();
      });
    }



  }

  window.cart = {};
  window.cart.displayCart = displayCart;

  window.$cartPage = $cartPage;


});
