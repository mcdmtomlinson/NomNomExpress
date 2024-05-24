/**
 * class that read data stored in front end local storage to create the cart.
 */
class CartItem {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.quantity = data.quantity;
    this.price = data.price;
    this.specialRequests = data.specialRequests;
    this.subtotal = data.quantity * data.price;
  }
}

