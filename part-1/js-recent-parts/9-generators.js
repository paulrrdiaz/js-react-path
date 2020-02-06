const randomInt = (minimum = 1, maximum) => {
  if (maximum === undefined) {
		maximum = minimum;
		minimum = 0;
	}
  
  return Math.floor(
		(Math.random() * (maximum - minimum + 1)) + minimum
	)
}

const TYPES = ["Action", "Drama", "Crime", "Comedy", "Science fiction", "Romance"];
const CHARACTERS = [
  "Scarlet Johanson",
  "Brie Larson",
  "Lupita Nyong'O",
  "Joaquin Phoenix",
  "Antonio Banderas",
  "Leonardo DiCaprio",
  "Brad Pitt",
  "johnny depp",
  "Al Pacino",
];
const DIRECTORS = [
  "Quentin Tarantino",
  "Martin Scorsese",
  "Todd Phillips",
  "Bong Joon Ho",
  "Sam Mendes",
  "David Fincher",
];

const randomItem = array => array[randomInt(0, array.length - 1)];

const createRandomMovie = () =>
  `
    Can you imagine a random ${randomItem(TYPES)} movie, 
    with ${randomItem(CHARACTERS)} and ${randomItem(CHARACTERS)},
    and directed by ${randomItem(DIRECTORS)}
  `;

const movies = {
  [Symbol.iterator]: function*() {
    while (true) {
      if (randomInt(0, 10) > 7) return;
      yield createRandomMovie();
    }
  },
};

const moviesOld = {
  [Symbol.iterator]() {
    return {
      next: () => {
        const finish = randomInt(10) > randomInt(10);
        
        return finish ? {
          value: undefined,
          done: true,
        } : {
          value: createRandomMovie(),
          done: false
        }
      }
    }
  }
}

for (const movie of movies) {
  console.log(movie);
}

for (const movie of moviesOld) {
  console.log(movie);
}
