$(() => {

  const $cartPage = $(`
  <div>
  <h1>ORDER SUMMARY</h1>
  <br>
  </div>
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
    //TODO: retrieve restaurant id from DB
    const cart = new Cart({ restaurantId: 1 });
    const total = cart.getTotal();

    for (let item of cart.cartItems) {
      const cartItem = window.cartItem.createCartItem(item);
      $cartTableBody.append(cartItem);
    }
    $cartTable.append($cartTableBody);
    $cartPage.append($cartTable);
    $cartPage.append('<br>');
    $cartPage.append(displayTotal(total));

    //Ryan please send this also
    const data = {items: cart.cartItems, restaurantId:1, clientId:1};

    $cartPage.on('click', '#checkout-button', function() {
      createOrder(data);

    });

  }

  window.cart = {};
  window.cart.displayCart = displayCart;

  window.$cartPage = $cartPage;


});
