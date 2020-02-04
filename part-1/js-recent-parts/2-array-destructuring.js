function data() {
  return [4, 5, null];
}

const response = data();

const prop1 = response[0];
const prop2 = response[1];
const prop3 = response[2] || 100;

console.log(prop1);
console.log(prop2);
console.log(prop3, "prop3");

const [a, b, c = 50, ...rest] = response;

const temp = Array.from("1, 2, 3");

console.log(a);
console.log(b);
console.log(c);
console.log(rest);

let x;
let y;
const obj = {};

[x, , y] = response;
[obj.a, obj.b] = response;

console.log(x, "x");
console.log(y, "y");
console.log(obj, "obj");

function moreData([first = "Jon", second = "Stark"] = [], count = "Testing") {
  return [first, second, count];
}

const starks = ["Sansa", "Tyrion"];

moreData(starks, 200);
