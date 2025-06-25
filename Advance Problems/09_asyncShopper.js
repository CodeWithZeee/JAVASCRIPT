function placeOrder(orderId) {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 2000) + 1000; // 1s to 3s delay
    setTimeout(() => {
      resolve(`Order ${orderId} confirmed! Your items will be shipped soon.`);
    }, delay);
  });
}

// Example usage of the placeOrder function
(async () => {
  console.log("Placing your order...");
  const confirmation = await placeOrder("XYZ123");
  console.log(confirmation);
})();