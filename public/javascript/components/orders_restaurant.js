$(() => {

  const $ordersRestaurant = $(`
  <div>

  </div>
  `);
  const $ordersHeader = $(`
   <h1>ORDERS IN PROGRESS</h1>
  <br>
   `);
  const $ordersTable = $(`
  <table class="table table-borderless">
  <thead>
  <tr>
    <th>Order_ID</th>
    <th>Name</th>
    <th>Details</th>
    <th>Total</th>
  </tr>
  </thead>
</table>
  `);

  const $ordersTableBody = $(`
  <tbody>
</tbody>
  `);


  function displayOrders() {
    $ordersTableBody.empty();
    $ordersRestaurant.empty();

    const orders = [
      {
        order_id: 1,
        client_id: 1,
        restaurant_id: 1,
        order_details: "3 burguers",
        order_total: 30.00
      },
      {
        order_id: 2,
        client_id: 3,
        restaurant_id: 1,
        order_details: "2 summer rolls",
        order_total: 16.00
      },
      {
        order_id: 3,
        client_id: 5,
        restaurant_id: 1,
        order_details: "4 empanadas",
        order_total: 20.00
      }
    ];

    //TODO: retrieve orders from backend.

    for (let order of orders) {
      const orderDetails = window.orderDetails.createOrder(order);

      $ordersTableBody.append(orderDetails);
    }

    $ordersRestaurant.append($ordersHeader);
    $ordersRestaurant.append($ordersTable);
    $ordersRestaurant.append($ordersTableBody);



    $ordersRestaurant.on('click', '.order_ready', function() {

      let orderItem = $(this).closest('.order-item');
      let orderId = orderItem.data('item');
      console.log(orderId);
      // orderComplete(orderId);
      // $cartPage.empty();
    });
  }





  window.order = {};
  window.order.displayOrders = displayOrders;

  window.$ordersRestaurant = $ordersRestaurant;


});
