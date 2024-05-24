$(() => {
  window.cartItem = {};

  function createCartItem(item) {
    return `
    <tr>
    <td>${item.quantity}</td>
    <td>${item.name}</td>
    <td>${item.subtotal}</td>
  </tr>
  `;
  }

  window.cartItem.createCartItem = createCartItem;

});
