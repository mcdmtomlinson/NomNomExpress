const $orders_restaurant = $(`
<div>

</div>
`);
 const $ordersHeader = $(`
 <h1>ORDER SUMMARY</h1>
<br>
 `);
const $ordersTable = $(`
<table class="table table-borderless">
<thead>
<tr>
  <th>Order ID</th>
  <th>Name</th>
  <th>Menu Items</th>
  <th>Order Status</th>
</tr>
</thead>
</table>
`);

const $ordersTableBody = $(`
<tbody>
</tbody>
`);


function displayStatus(Status) {
  return `
  <div class="d-flex justify-content-around">
  <div> TOTAL: $${total} </div>
  <button id="checkout-button" type="button" class="btn btn-info">Confirm order</button>
  </div>
  `;
}

function displayOrders() {
  $ordersTableBody.empty();
  $ordersPage.empty();

  //TODO: retrieve restaurant id from DB
  const orders = new Orders({ restaurantId: 1 });
  const status = orders.getStatus();

  if(orders.ordersItems.length === 0) {
    $ordersPage.append($orderEmpty);
  } else {
    for (let item of orders.ordersItems) {
      const ordersItem = window.ordersItem.createordersItem(item);
      $ordersTableBody.append(orderItem);
    }
    $ordersPage.append($ordersHeader);
    $ordersTable.append($ordersTableBody);
    $ordersPage.append($ordersTable);
    $ordersPage.append('<br>');
    $ordersPage.append(displayStatus(Status));

}

window.orders = {};
window.orders.displayOrders = displayOrders;

window.$ordersPage = $ordersPage;


};
