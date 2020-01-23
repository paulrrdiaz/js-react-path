// Closure
// function remembers the variables outside of it.
function askSomething(question) {
  setTimeout(function() {
    console.log(question);
  }, 1000);
}

askSomething("What are you doing here?");

/*
 *
 *
 *
 */

(function myAwesomeFunction() {
  let foo = "bar";

  function myClosure() {
    console.log(foo);
  }

  function init(callback) {
    let foo = "baz";
    callback();
  }

  init(myClosure);
})();

/*
 *
 *
 *
 */

var obj1 = {
  property1: {
    subProperty1: "foo",
  },
};

var obj2 = obj1;

obj1 = "bar";

var baz = obj2.property1;

obj2 = "xyzzy";

console.log(obj1, "obj1");
console.log(obj2, "obj2");
console.log(baz, "baz");
