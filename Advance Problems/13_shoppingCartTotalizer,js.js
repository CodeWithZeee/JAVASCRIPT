function calculateTotal(cart) {
  return cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

// Example usage of the calculateTotal function
const shoppingCart = [
  { name: "Headphones", price: 50, quantity: 2 },
  { name: "USB Cable", price: 10, quantity: 3 },
  { name: "Monitor", price: 150, quantity: 1 }
];

console.log(calculateTotal(shoppingCart)); // Output: 280