function brewCoffee(coffeeType) {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 2000) + 1000; // delay between 1s and 3s
    setTimeout(() => {
      resolve(`☕ Your ${coffeeType} is ready! Enjoy!`);
    }, delay);
  });
}

// Example usage of the brewCoffee function
(async () => {
  console.log("Brewing your coffee...");
  const message = await brewCoffee("Latte");
  console.log(message);
})();