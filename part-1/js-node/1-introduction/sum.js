// commonjs

// node_modules/cjs/...

// esm

const foo = (a) => a * a;

const sum = (a, b) => {
  return foo(a) + b;
};


module.exports = {
  sum,
  value: 10,
  sayHello: () => "Hello",
};
