/*
*

Write a function to convert from normal numbers to Roman Numerals.

 1  => I
10  => X
 7  => VII
400 => CD
404 => CDIV

*
*/

const ROMANS = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const toRoman = (number, roman = "") => {
  for (const ROMAN in ROMANS) {
    while (number >= ROMANS[ROMAN]) {
      roman += ROMAN;
      number -= ROMANS[ROMAN];
    }
  }

  return roman;
};

const romanize = (number, roman = "") =>
  Object.keys(ROMANS).reduce((previous, current) => {
    while (number >= ROMANS[current]) {
      roman += current;
      number -= ROMANS[current];
    }
    return previous + roman;
  }, "");
