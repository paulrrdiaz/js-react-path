/*

Promise states

- Pending

=> Promise settle
- Fulfilled
- Rejected

*/

const youPromiseToReadMore = youHaveEnergy => {
  return new Promise((resolve, reject) => {
    if (youHaveEnergy) {
      resolve("grab a book");
    } else {
      reject("go to sleep");
    }
  });
};

youPromiseToReadMore(false)
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log("settle"));

const resolveAfter = (ms, value) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value);
    }, ms);
  });
};

const promiseFoo = resolveAfter(3000, { name: "Jon" });
const promiseBar = resolveAfter(4000, "bar");
const promiseBaz = resolveAfter(5000, "baz");
const promiseFailed = Promise.reject({
  error: true,
  msg: "This is an error",
});

const promises = [promiseFoo, promiseFailed, promiseBaz, promiseBar];

const fastestPromise = Promise.race(promises);

fastestPromise.then(response => {
  console.log(response);
});

const allPromises = Promise.all(promises);
allPromises.then(response => {
  console.log(response);
});

const settlePromises = Promise.allSettled(promises);

settlePromises.then(response => {
  const rejected = response.filter(r => r.status !== "fulfilled");
  console.log(rejected);
});

Promise.any([
  Promise.reject("Error 1!!!"),
  Promise.reject("Error 2!!!"),
  Promise.resolve("Nice 1!!!"),
  Promise.resolve("Nice 2!!!"),
]).then(
  value => console.log(value),
  error => console.log(error),
);

const JOKES_API_URL = "https://official-joke-api.appspot.com/random_ten";
