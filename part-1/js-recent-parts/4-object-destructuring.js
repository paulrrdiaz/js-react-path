function data() {
  return {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
  };
}

const { a, c, ...rest } = data();

console.log(a);
console.log(c);
console.log(rest);

let first;

({
  a: first,
} = data());

console.log(first, "first")

function moreData({ a, b }) {
  return a + b
}

const rawData = {
  a,
  b: c
}

console.log(moreData(rawData), "moreData")