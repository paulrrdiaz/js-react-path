const books = [];

const addBook = function(book, word) {
  const includesWord = book.toLowerCase().includes(word);

  if (includesWord) {
    books.push(book);
  }
};

const printBooks = function() {
  console.log("Total books: " + books.length);

  for (let book of books) {
    console.log(book);
  }
};

addBook("Javascript Patterns", "javascript");
addBook("Elocuent Javascript", "javascript");
addBook("A Song of Ice and Fire", "javascript");
addBook("Think of a number", "javascript");
addBook("You don't know Javascript", "javascript");

printBooks();
