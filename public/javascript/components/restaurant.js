// Assuming you have retrieved order details from the database
const order = {
  id:  // Order ID
  customerName: "John Doe",
  phoneNumber: "123-456-7890",
  restaurant: { // Restaurant details (assuming retrieved from database)
    name: "Pizza Palace",
    location: "123 Main St",
  },
  items: [
    { // Example menu item
      id: 1,
      name: "Large Pepperoni Pizza",
      price: 15.99,
      category: "Pizza",
    },
    // Add more items as needed
  ],
  totalPrice: 25.48, // Order total price
  originalPickupTime: new Date("2024-05-29 18:00:00"), // Example pickup time
};

// Function to confirm order details
function confirmOrderDetails(order) {
  const confirmationMessage = `
  Order ID: ${order.id}
  Customer Name: ${order.customerName}
  Phone Number: ${order.phoneNumber}
  Restaurant: ${order.restaurant.name} - ${order.restaurant.location}
  Items:`;

  // Loop through order items and format details
  for (const item of order.items) {
    confirmationMessage += `\n  - ${item.name} - $${item.price}`;
  }

  confirmationMessage += `
  Total Price: $${order.totalPrice}
  Original Pickup Time: ${order.originalPickupTime.toLocaleString()}

  Are these details correct? (y/n)`;

  const userInput = prompt(confirmationMessage);
  return userInput.toLowerCase() === "y";
}

// Function to update pickup time (assuming functionality to update in database)
function updatePickupTime(order) {
  const newPickupTime = prompt("Enter new pickup time (YYYY-MM-DD HH:MM): ");
  try {
    const parsedTime = new Date(newPickupTime);
    if (isNaN(parsedTime.getTime())) {
      throw new Error("Invalid date format. Please use YYYY-MM-DD HH:MM");
    }
    // Simulate updating database (replace with actual database interaction)
    order.originalPickupTime = parsedTime;
    console.log("Pickup time updated in your order (simulated update).");
    return true;
  } catch (error) {
    console.error("Error updating pickup time:", error.message);
    return false;
  }
}

// Order confirmation flow
if (confirmOrderDetails(order)) {
  if (updatePickupTime(order)) {
    console.log("Order confirmed with updated pickup time:", order.originalPickupTime.toLocaleString());
  } else {
    console.log("Failed to update pickup time. Order details remain unchanged.");
  }
} else {
  console.log("Order confirmation cancelled.");
}
