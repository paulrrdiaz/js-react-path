/*
*
*
*
*
*

on every year that is evenly divisible by 4
except every year that is evenly divisible by 100
unless the year is also evenly divisible by 400

*
*
*
*
*
*/

const divisible = year => number => Number(year) % number === 0;

const isLeap = year => {
  const isDivisibleBy = divisible(year);
  return isDivisibleBy(4) && (!isDivisibleBy(100) || isDivisibleBy(400));
};
