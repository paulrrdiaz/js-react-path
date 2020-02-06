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

const promiseA = resolveAfter(4000, "Jon");
const promiseB = resolveAfter(2000, "Snow");

const fastestPromise = Promise.race([promiseA, promiseB]);
fastestPromise.then(response => console.log(response));

// promiseA.then((responseA) => {
//   console.log(responseA);
//   promiseB.then((responseB) => {
//     console.log(responseB)
//   })
// })

Promise.all([promiseA, promiseB]).then(response => {
  const responseA = response[0];
  const responseB = response[1];
  console.log(responseA, responseB);
});

Promise.any([
  Promise.reject("Error 1!!!"),
  Promise.reject("Error 2!!!"),
  Promise.resolve("Nice!!!")
]).then(
  value => console.log(value),
  error => console.log(error)
)

const JOKES_API_URL = "https://official-joke-api.appspot.com/random_ten";
