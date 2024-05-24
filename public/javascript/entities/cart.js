class Cart {
  constructor(data) {
    this.restaurantId = data.id;
    this.cartItems = this.getCartItems();
  }

  getCartItems() {
    // dummy data this is what Ryan will do, delete this lines
    const dummyData = [
      { id: 1, name: "Burger", quantity: 3, price: 2.4, specialRequests: null },
      { id: 2, name: "Fries", quantity: 2, price: 1.4, specialRequests: null },
    ];
    window.localStorage.setItem('cartItems', JSON.stringify(dummyData));

    // Fetch from local storage
    const items = JSON.parse(window.localStorage.getItem("cartItems"));
    return items.map(item => new CartItem(item));
  }

  getTotal() {
    return this.cartItems.reduce((total,item)=> {
      return total + item.subtotal;
    }, 0);
  }
}
