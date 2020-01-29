const palindrome = string => {
  const array = string.split("") || Array.from(string);
  const middlePoint = 
    string.length % 2 ?
      (string.length - 1) / 2 :
      string.length / 2;
      
  return array
    .slice(0, middlePoint)
    .every((char, i) => char === array[array.length - 1 - i]);
};