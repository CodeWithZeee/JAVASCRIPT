// Q1) Create a JavaScript class to create a complex number. Create a constructor to set the real and the complex part.
// Q2) Write a method to add two complex numbers in the above class.
// Q3) Create a class Student from a class Human. Override a method & see changes.
// Q4) See if Student is an instance of Human using the instanceof keyword.
// Q5) Use getters & setters to set and get the real and imaginary parts of the complex number.

// Ans 1)
class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }
}

const num = new ComplexNumber(3, 4);
console.log(`Real part: ${num.real}, Imaginary part: ${num.imaginary}`);
console.log(`Complex Number: ${num.real} + ${num.imaginary}i`);

// Ans 2)
const addComplexNumbers = (num1, num2) => {
  return new ComplexNumber(
    num1.real + num2.real,
    num1.imaginary + num2.imaginary
  );
};
const num1 = new ComplexNumber(3, 4);
const num2 = new ComplexNumber(1, 2);
const result = addComplexNumbers(num1, num2);
console.log(`Result: ${result.real} + ${result.imaginary}i`);

// Ans 3)
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hi, I am ${this.name}, and I am ${this.age} years old.`;
    }
}

class Student extends Human {
    constructor(name, age, grade) {
        super(name, age); // Use Human's constructor  (Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructorat new Student)
        this.grade = grade; // Add new property
    }

    introduce() { // Override the method
        return `Hi, I am ${this.name}, a student in grade ${this.grade}.`;
    }
}

// Testing
const person = new Human("Alice", 30);
console.log(person.introduce()); // "Hi, I am Alice, and I am 30 years old."

const student = new Student("Bob", 16, 10);
console.log(student.introduce()); // "Hi, I am Bob, a student in grade 10."

// .introduce() method is overridden in Student class


// Ans 4)
console.log(student instanceof Human); // true
console.log(student instanceof Student); // true
console.log(person instanceof Student); // false


// Ans 5)
class ComplexNumberGS {
    constructor(real, imaginary) {
        this._real = real;         
        this._imaginary = imaginary;
    }

    // Getter for real part
    get real() {
        return this._real;
    }

    // Setter for real part
    set real(value) {
        if (typeof value === "number") {
            this._real = value;
        } else {
            console.error("Real part must be a number!");
        }
    }

    // Getter for imaginary part
    get imaginary() {
        return this._imaginary;
    }

    // Setter for imaginary part
    set imaginary(value) {
        if (typeof value === "number") {
            this._imaginary = value;
        } else {
            console.error("Imaginary part must be a number!");
        }
    }
}

// Example usage:
const number = new ComplexNumberGS(3, 4);
console.log(`Real part: ${number.real}, Imaginary part: ${number.imaginary}`);

number.real = 5;      // Using the setter to update the real part
number.imaginary = -6; // Using the setter to update the imaginary part

console.log(`Real part: ${number.real}, Imaginary part: ${number.imaginary}`);