class Cart {
  constructor(data) {
    this.restaurantId = data.id;
    this.cartItems = this.getCartItems();
  }

  getCartItems() {
    // dummy data this is what Ryan will do, delete this lines


    // Fetch from local storage
    const menu = JSON.parse(window.localStorage.getItem("cartItems"));

    const finalOrder = [];
    if (!menu) {
      return finalOrder;
    }
    for (let key in menu.items) {
      const item = menu.items[key];
      finalOrder.push(new CartItem(item));
    }
    return finalOrder;
  }

  getTotal() {
    return this.cartItems.reduce((total,item)=> {
      return total + item.subtotal;
    }, 0);
  }
}
