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


  window.$cartPage = $cartPage;

  function displayTotal(total) {
    return `
    <div> TOTAL: ${total} </div>
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
    $cartPage.append(displayTotal(total));
  }



  window.cart = {};
  window.cart.displayCart = displayCart;

});

