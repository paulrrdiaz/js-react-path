// Object Literal

const muggle = {
  firstName: "Pablo",
  lastName: "Perez",
  age: 30,
  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// new Object() syntax

const muggle = new Object();

// Object blueprint

function Muggle(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };
}

const someBody = new Muggle("Carlos", "Perez");

// Destructuring

const { a, b } = someEndpoint();