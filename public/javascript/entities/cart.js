class Cart {
  constructor(data) {
    this.restaurantId = data.id;
    this.cartItems = this.getCartItems();
  }

  getCartItems() {
    // dummy data
    // TODO: Fetch from local storage
    const items = [
      { id: 1, name: "Burger", quantity: 3, price: 2.4, specialRequests: null },
      { id: 2, name: "Fries", quantity: 2, price: 1.4, specialRequests: null },
    ];
    return items.map(item => new CartItem(item));
  }

  getTotal() {
    return this.cartItems.reduce((total,item)=> {
      return total + item.subtotal;
    }, 0);
  }
}
