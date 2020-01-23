var manager = "Jurgen";

function getManager() {
  manager = "Klopp";
  team = "Liverpool";

  return `${manager} is ${team}'s manager`;
}

getManager();
manager;
team;

// Global scope

window.foo = "bar";

/*
 *
 *
 *
 */
// Local scope

// Global Scope
function someFunction() {
  // Local Scope #1
  function someOtherFunction() {
    // Local Scope #2
  }
}

// Global Scope
function anotherFunction() {
  // Local Scope #3
}
// Global Scope

/*
 *
 *
 *
 */
// Block scope

let bar = "baz";

{
  const foo = "faz";
}

console.log(foo); // undeclared

/*
 *
 *
 *
 */
// Function scope

for (var i = 0; i < 5; i++) {
  (function(x) {
    setTimeout(function() {
      console.log(x);
    }, 100);
  })(i);
}

console.log(foo());
var foo = function() {
  return "foo";
};

console.log(baz());
function baz() {
  return "baz";
}

/*
 *
 *
 *
 */
