$(() => {
  window.orderDetails = {};

  function createOrder(orderDetail) {
    return `
    <tr class='order-item' data-item='${JSON.stringify(orderDetail.order_id)}'>
      <td>${orderDetail.order_id}</td>
      <td>${orderDetail.client_id}</td>
      <td>${orderDetail.restaurant_id}</td>
      <td>${orderDetail.order_details}</td>
      <td>${orderDetail.order_total}</td>
      <td><button class="order_ready">Order ready</button></td>
    </tr>
  `;
  }

  window.orderDetails.createOrder = createOrder;

});

