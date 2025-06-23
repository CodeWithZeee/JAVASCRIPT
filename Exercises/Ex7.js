/**
 * Create a js program capable of generating a password which contains atleast one lowercase , one uppercase and one special characters
 * Create a password class to achieve the same 
 */

class Password {
  constructor(length) {
    this.length = Math.max(length, 3); // Minimum length to fit all required types
    this.lowercase = 'abcdefghijklmnopqrstuvwxyz';
    this.uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.numbers = '0123456789';
    this.specials = '!@#$%^&*()_+[]{}|;:,.<>?';
  }

  generate() {
    // Ensure at least one from each required category
    let pwd = [
      this.randomChar(this.lowercase),
      this.randomChar(this.uppercase),
      this.randomChar(this.specials)
    ];

    const allChars = this.lowercase + this.uppercase + this.numbers + this.specials;

    // Fill the remaining characters
    for (let i = pwd.length; i < this.length; i++) {
      pwd.push(this.randomChar(allChars));
    }

    // Shuffle to avoid predictable positions
    return this.shuffle(pwd).join('');
  }

  randomChar(str) {
    return str[Math.floor(Math.random() * str.length)];
  }

  shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}

// Example usage:
const securePwd = new Password(12); // You can choose any desired length >= 3
console.log("Generated password:", securePwd.generate());