const STAR_WARS_API_URL = "https://swapi.co/api";
const JOKES_API_URL = "https://official-joke-api.appspot.com/random_ten";

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

fetch(`${STAR_WARS_API_URL}/films`)
  .then(response => response.json())
  .then(response => {
    const films = response.results.map(({ title, release_date: releaseDate }) => ({
      title,
      releaseDate,
    }));
    console.log(films);
  })
  .catch(e => console.log(e));

const makeJokes = async () => {
  try {
    const response = await fetch(JOKES_API_URL);
    const jokes = await response.json();
    console.log("fooooooo");
    console.log(
      jokes.map(
        ({ setup, punchline }) => `
    ${setup}
    ${punchline}
  `,
      ),
    );
  } catch (e) {
    console.log(e, "catch!");
  } finally {
    console.log("Finally");
  }
};

const results = async () => {
  try {
    const data = await Promise.all([makeJokes(), promiseFoo]);
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

results();
