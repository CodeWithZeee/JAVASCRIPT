 function delayDouble(num) {
  return new Promise(resolve => {
    setTimeout(() => resolve(num * 2), 500);
  });
}

async function createDelayedDoubles(arr) {
  return arr.map(num => delayDouble(num));
}


// Example usage of the createDelayedDoubles function
(async () => {
  const numbers = [1, 2, 3];
  const promises = await createDelayedDoubles(numbers);

  // Resolve each Promise to see the results
  const results = await Promise.all(promises);
  console.log(results); // [2, 4, 6] after 500ms delay
})();