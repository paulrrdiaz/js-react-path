const isArmstrongNumber = number => {
  if (!number) {
    return true;
  }

  const stringFromNumber = String(number);
  const arrayFromString = Array.from(stringFromNumber);

  const sum = arrayFromString.reduce(
    (previous, current) => Math.pow(Number(current), arrayFromString.length) + previous,
    0,
  );

  return sum === number;
};
