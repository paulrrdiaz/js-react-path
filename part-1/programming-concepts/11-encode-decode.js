const encode = (code, encoded = "", count = 1) => {
  const arrayFromCode = Array.from(code);

  for (let c = 0; c < arrayFromCode.length; c++) {
    const isSameLetter = arrayFromCode[c] === arrayFromCode[c + 1];
    const onlyOneLetter = count === 1;

    if (isSameLetter) {
      count = count + 1;
    } else {
      encoded = onlyOneLetter ? encoded + arrayFromCode[c] : encoded + count + arrayFromCode[c];
      count = 1;
    }
  }

  return encoded;
};

const decode = (code, decoded = "", repeated = "") => {
  const arrayFromCode = Array.from(code);

  for (let c = 0; c < arrayFromCode.length; c++) {
    const onlyOneLetter = repeated === "";
    const isNumber = !isNaN(Number(arrayFromCode[c] === " " ? NaN : arrayFromCode[c]));

    if (isNumber) {
      repeated = repeated + arrayFromCode[c];
    } else {
      decoded = onlyOneLetter
        ? decoded + arrayFromCode[c]
        : decoded + arrayFromCode[c].repeat(Number(repeated));
      repeated = "";
    }
  }

  return decoded;
};
