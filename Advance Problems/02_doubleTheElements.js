function doubleUniqueConsecutive(arr) {
  const result = [];
  let prev = null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== prev) {
      result.push(arr[i] * 2);
    }
    prev = arr[i];
  }

  return result;
}


// Example usage of the doubleUniqueConsecutive function
console.log(doubleUniqueConsecutive([2, 2, 3, 3, 3, 4]));
// Output: [4, 6, 8]