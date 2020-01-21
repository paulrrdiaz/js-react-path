const PROTEINS = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: "Stop",
  UAG: "Stop",
  UGA: "Stop",
};

const chunked = word => (number, chunks = []) => {
  for (let w = 0; w < word.length; w += number) {
    chunks.push(word.substring(w, w + number));
  }

  return chunks;
};

const getProteins = (chunked, proteins = []) => {
  for (let protein of chunked) {
    if (PROTEINS[protein] === "Stop") {
      break;
    }

    if (!PROTEINS[protein]) {
      throw new Error("Invalid codon");
    }

    proteins.push(PROTEINS[protein]);
  }

  return proteins;
};

const translate = (protein = null) => {
  if (!protein) {
    return [];
  }

  const chunkedBy = chunked(protein);
  return getProteins(chunkedBy(3));
};
