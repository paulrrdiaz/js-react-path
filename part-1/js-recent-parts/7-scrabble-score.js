const PRIMITIVES_SCORES = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};

const SCORES = Object.keys(PRIMITIVES_SCORES).reduce(
  (previous, current) => ({
    ...previous,
    ...PRIMITIVES_SCORES[current].reduce(
      (p, c) => ({
        ...p,
        [c.toLowerCase()]: Number(current),
      }),
      {},
    ),
  }),
  {},
);

export const score = word =>
  Array.from(word.toLowerCase()).reduce((previous, letter) => previous + SCORES[letter], 0);
