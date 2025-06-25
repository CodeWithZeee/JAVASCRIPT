function sumUntilNegative(arr) {
  let sum = 0;

  for (let num of arr) {
    if (num < 0) break;
    sum += num;
  }

  return sum;
}

// Example usage:
console.log(sumUntilNegative([5, 10, 3, -2, 8])); // Output: 18