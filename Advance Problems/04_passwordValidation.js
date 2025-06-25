function isValidPassword(password) {
  const minLength = /.{8,}/;
  const hasUpper = /[A-Z]/;
  const hasLower = /[a-z]/;
  const hasDigit = /\d/;

  return minLength.test(password) &&
         hasUpper.test(password) &&
         hasLower.test(password) &&
         hasDigit.test(password);
}

// Example usage:
console.log(isValidPassword("Password1")); // true
console.log(isValidPassword("pass"));      // false