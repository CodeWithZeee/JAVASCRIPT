function filterProducts(products, criterion) {
  return products.filter(product => {
    return Object.entries(criterion).every(([key, value]) => product[key] === value);
  });
}

// Example usage:
const products = [
  { id: 1, name: "Laptop", category: "electronics", price: 1200 },
  { id: 2, name: "T-shirt", category: "clothing", price: 25 },
  { id: 3, name: "Smartphone", category: "electronics", price: 800 },
];

const filtered = filterProducts(products, { category: "electronics" });

console.log(filtered);
// Output: [
//   { id: 1, name: "Laptop", category: "electronics", price: 1200 },
//   { id: 3, name: "Smartphone", category: "electronics", price: 800 }
// ]