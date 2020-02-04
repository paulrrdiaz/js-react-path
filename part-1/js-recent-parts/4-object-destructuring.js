function data() {
  return {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: {
      name: "Paul",
      address: "",
      email: "",
    },
  };
}

const response = data();

const {
  a: propA,
  c,
  e,
  e: { name: myName, ...restE },
  ...rest
} = response;

console.log(propA, "a");
console.log(c, "c");
console.log(e, "e");
console.log(rest, "rest parameter");
console.log(myName, "name");
console.log(restE, "restE");

function moreData({ x = 4, y = 5 } = {}, count = 0) {
  return {
    x,
    y,
    count,
  };
}

const obj = {
  x: 1,
  y: 2,
};

moreData(obj, 0, 1);

let x;

({ e: x } = response);

console.log(x, "x17");

{
  console.log("hi");
  const a = "a";
  console.log(a);
}

console.log(a);

const a = () => {};
