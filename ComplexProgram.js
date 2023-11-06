/*
* File Name: ComplexProgram.js
* Description: This complex JavaScript program demonstrates a sophisticated and creative implementation that goes beyond simple examples.
* Author: John Doe
*/

// =====================================
// Complex Program Implementation
// =====================================

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet the person
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  // Method to calculate the birth year
  calculateBirthYear() {
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - this.age;
    console.log(`I was born in ${birthYear}.`);
  }
}

// Class representing a Car
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  // Method to start the car
  startCar() {
    console.log(`Starting the ${this.make} ${this.model}.`);
  }

  // Method to stop the car
  stopCar() {
    console.log(`Stopping the ${this.make} ${this.model}.`);
  }
}

// Main program logic
const main = () => {
  // Create and greet a person
  const person = new Person("John Doe", 30);
  person.greet();
  person.calculateBirthYear();

  // Create and start a car
  const car = new Car("Tesla", "Model S");
  car.startCar();

  // Perform complex calculations
  let result = 0;
  for (let i = 1; i <= 100; i++) {
    result += i;
  }
  console.log(`The sum of numbers from 1 to 100 is ${result}.`);

  // Display a complex pattern
  for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += j;
    }
    console.log(pattern);
  }

  // Perform an asynchronous operation
  setTimeout(() => {
    console.log("This code executes after 2 seconds.");
  }, 2000);
};

// Invoke the main program logic
main();