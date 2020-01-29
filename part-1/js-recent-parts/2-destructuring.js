function data() {
  return [1, 2, 3, 4, 5, 6];
}

const arrayFromData = data()

const [
  a,
  b = 420,
  c
] = data();

const obj = {};

[
  obj.a,
  obj.b,
  obj.c
] = data() || [];

function moreData([a, b, c] = []) {
  return a + b + c
}

moreData(arrayFromData)