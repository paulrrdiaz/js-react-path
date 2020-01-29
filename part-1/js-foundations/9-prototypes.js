// Constructor function
function Person(name) {
  this.name = name;
  
  this.sayHello = function() {
    console.log("Hi " + this.name)
  }
}

const person1 = new Person("Paul")
const person2 = new Person("Jose")
person1.sayHello();
person2.sayHello();

// person1.sayBye();

Person.prototype.sayBye = function () {
  console.log("Bye " + this.name)
}

person1.sayBye();
