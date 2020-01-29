class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greet() {
    return `Hi! ${this.firstName} ${this.lastName}`;
  }
}

const person = new Person("Paul", "Diaz");
person.greet();
