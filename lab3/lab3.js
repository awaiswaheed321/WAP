"use strict";
// Question 1 Part A
function sumOfSquares(arr) {
  return arr.map((x) => x * x).reduce((a, b) => a + b);
}
console.log("**********Question 1 Part A: Sum Of Squares**********");
console.log(sumOfSquares([1, 2, 3, 4]));

// Question 1 Part B
let checkAndPrintOdd = function (arr) {
  arr
    .filter((x) => x % 2 != 0)
    .forEach((element) => {
      console.log(element);
    });
};
console.log("**********Question 1 Part B: Print Odd Numbers**********");
checkAndPrintOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Question 1 Part C
console.log("**********Question 1 Part B: Print Fibonacci Series**********");
const printFibonacciSeries = (max, start1, start2) => {
  let result = [];
  for (let i = 0; i < max; i++) {
    if (i == 0) {
      result.push(start1);
    } else if (i == 1) {
      result.push(start2);
    } else {
      result[i] = result[i - 1] + result[i - 2];
    }
  }

  console.log(result.join(", "));
};

printFibonacciSeries(10, 0, 1);

// Question 2
console.log("**********Question 2: Destruct**********");
const destruct = (user) => {
  let { name: fName, years: age, isAdmin = false } = user;
  console.log("Name: ", fName);
  console.log("Age: ", age);
  console.log("Is Admin: ", isAdmin);
};
console.log("Example 1 => ");
destruct({ name: "John", years: 30 });
console.log("Example 2 => ");
destruct({ name: "John", years: 30, isAdmin: true });

// Question 3
console.log("**********Question 3: Arrays & Objects**********");
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

console.log("Starting Books: ", libraryBooks);
const book1 = addBook("Sweet Dreams", "Bill Myers", 1234);
console.log("New Book 1: ", book1);
const book2 = addBook("Bad Dreams", "Bill Myers", 6789);
console.log("New Book 2: ", book1);
console.log("After Adding 2 books: ", libraryBooks);
console.log("All Titles : ", getTitles());
console.log("Find 'Ahead': ", findBooks("Ahead"));
console.log("Find 'Dream': ", findBooks("Dream"));
