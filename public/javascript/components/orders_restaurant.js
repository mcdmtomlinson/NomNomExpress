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
    <th>Order id</th>
    <th>Client</th>
    <th>Restaurant</th>
    <th>Total</th>
    <th>Order details</th>
    <th></th>
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
    getOrderForRestaurant().then(({ orders }) =>{

      console.log(orders);
      //TODO: retrieve orders from backend.

      for (let order of orders) {
        const orderDetails = window.orderDetails.createOrder(order);

        $ordersTableBody.append(orderDetails);
      }

      $ordersRestaurant.append($ordersHeader);
      $ordersTable.append($ordersTableBody);
      $ordersRestaurant.append($ordersTable);




      $ordersRestaurant.on('click', '.order_ready', function() {

        let orderItem = $(this).closest('.order-item');
        let orderId = orderItem.data('item');
        orderComplete(orderId);
        // $cartPage.empty();
      });
    });



  }





  window.order = {};
  window.order.displayOrders = displayOrders;

  window.$ordersRestaurant = $ordersRestaurant;


});
