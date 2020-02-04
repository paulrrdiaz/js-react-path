const arr = ["Jon", "Sansa", "Arya", "Robb", "Useless"];
const students = [
  {
    name: "Yoel Picasso Chavez",
    background: "FullStack",
    email: "ypicasso@gmail.com",
  },
  {
    name: "Juan Kuga",
    background: "FullStack",
    email: "juankp3@gmail.com",
  },
  {
    name: "Luis Fernando",
    background: "Estudiante",
    email: "chaoslecion71@gmail.com",
  },
  {
    name: "Ladislao Chapa",
    background: "Freelance",
    email: "ladislaox@gmail.com",
  },
  {
    name: "Diego Rendería",
    background: "FullStack",
    email: "dgo250594@gmail.com",
  },
  {
    name: "Harold Carhuancho",
    background: "FullStack",
    email: "haroldavis91@gmail.com",
  },
  {
    name: "Diego Mitma",
    background: "a",
    email: "diego89ma@gmail.com",
  },
  {
    name: "Fernando Valverde |",
    background: "Backend",
    email: "fvalverdeu@gmail.com",
  },
  {
    name: "Joel Miranda",
    background: "Freelance",
    email: "joelmiranda1300@gmail.com",
  },
  {
    name: "Ronald Requena",
    background: "Backend",
    email: "rcronald@gmail.com",
  },
  {
    name: "Juan Mendoza",
    background: "Networking",
    email: "jmendozaore@gmail.com",
  },
];

const arr1 = arr
  .map((item, index) => {
    return {
      name: item,
      id: index,
    };
  })
  .filter(({ id }) => id < 3);

const arr2 = students.filter(({ name }) => name.includes("C"));

const arr3 = students.reduce((previous, current, index, array) => {
  return previous + current.email;
}, "");

const arr4 = students.every(({ name }) => name.includes("a"));
const arr5 = students.some(({ background }) => background.includes("end"));

console.log(arr, "arr");
console.log(arr1, "arr1");
console.log(arr2, "arr2");
console.log(arr3, "arr3reduce");
console.log(arr4, "arr4");
console.log(arr5, "arr5");

// Array.prototype.map()
// Array.prototype.filter()
// Array.prototype.reduce()
// Array.prototype.every()
// Array.prototype.some()

const snow = ["The King of the North", "Lord Commander", "Aegon Targaryen"]

console.log(snow.join(' / '));
console.log(snow.join(' '));
console.log(snow.join());

console.log(snow.indexOf('Lord Commander'));
console.log(snow.indexOf('Lord'));
console.log(snow.indexOf('Lord Commander', 2));
console.log(snow.indexOf());

const jonWolf = {
  name: "Ghost"
};

const sansaWolf = {
  name: "Lady"
}

const aryaWolf = {
  name: "Nymeria"
}

const rickonWolf = {
  name: "Shaggydog"
}

const aliveWolfs = [jonWolf, aryaWolf];
const wolfs = [jonWolf, rickonWolf, sansaWolf, aryaWolf];

console.log(aliveWolfs.indexOf(sansaWolf))
console.log(wolfs.indexOf(sansaWolf))

const findTheFirstNameWith = (letters) => wolfs.find(wolf => wolf.name.includes(letters));

const findTheFirstIndexWith = (letters) => wolfs.findIndex(wolf => wolf.name.includes(letters));

console.log(findTheFirstNameWith("a")); // { name: 'Shaggydog' }
console.log(findTheFirstIndexWith("a")); // 1

const numbers = [1, 2, 3, 4]
const arrayIncludes = numbers.includes(2)
console.log(arrayIncludes)

const arrayWithNestedValues = [
  1,
  2,
  [ 3, 4 ],
  [
    [
      5,
      6,
      [-1, -2]
    ],
    7
  ],
  8,
  [9],
  [[[[10]]]]
]

console.log(arrayWithNestedValues.flat(Infinity))

const arrayFlatMapped = numbers.flatMap(number => [number, number * 2])

console.log(arrayFlatMapped);

// Array.prototype.join()
// Array.prototype.indexOf()
// Array.prototype.find()
// Array.prototype.findIndex()
// Array.prototype.includes()
// Array.prototype.flat()
// Array.prototype.flatMap()