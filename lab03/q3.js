let libraryBooks = [
  { title: "The Road Ahead", author: "Bill Gates", ID: 1235 },
  { title: "Walter Isaacson", author: "Steve Jobs", ID: 4268 },
  { title: "The Road Ahead", author: "Bill Gates", ID: 4268 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    ID: 3257,
  },
];

const addBook = (title, author, id) => {
  const newBook = {
    title: title,
    author: author,
    id: id,
  };
  libraryBooks.push(newBook);
  return newBook;
};

const getTitles = () => {
  return libraryBooks
    .map((book) => book.title)
    .sort()
    .join(", ");
};

const findBooks = (title) => {
  const includesIgnoreCase = (str, searchStr) => {
    return str.toLowerCase().includes(searchStr.toLowerCase());
  };
  return libraryBooks
    .filter((book) => includesIgnoreCase(book.title, title))
    .sort((book1, book2) => {
      if (book1.ID > book2.ID) return 1;
      else if (book1.ID < book2.ID) return -1;
      else return 0;
    });
};

function performQuestion3() {
  console.log("**********Question 3: Arrays & Objects**********");
  console.log("Starting Books: ", libraryBooks);
  const book1 = addBook("Sweet Dreams", "Bill Myers", 1234);
  console.log("New Book 1: ", book1);
  const book2 = addBook("Bad Dreams", "Bill Myers", 6789);
  console.log("New Book 2: ", book1);
  console.log("After Adding 2 books: ", libraryBooks);
  console.log("All Titles : ", getTitles());
  console.log("Find 'Ahead': ", findBooks("Ahead"));
  console.log("Find 'Dream': ", findBooks("Dream"));
}

export { performQuestion3 };
