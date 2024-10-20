// // console.log("start");

// const func = (name) => {
//   console.log(`${name} Hi`);
// };

// // const timerId = setTimeout(func, 1000, "JOhn");
// // setTimeout(func, 1000, "Mari");
// // setTimeout(func, 2000, "Doe");
// setTimeout(func, 1000, "Pen");
// // clearTimeout(timerId);
// // console.log("End");

// let timerId = setInterval(() => console.log('tick'), 1000);
// // after 5 seconds stop
// setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 5000);

// const giveMePizza = () =>
//   new Promise((resolve, reject) => {
//     if (false) {
//       resolve("Give Pizza");
//     } else {
//       reject("No Pizza for you");
//     }
//   });

// giveMePizza()
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// console.log("Run this before");

// const promise = new Promise((resolve, reject) => {
//   console.log(`Promise starts`);
//   resolve(`Promise result`);
//   console.log(`Promise ends`);
// });
// console.log(`Code starts`);
// promise.then(console.log);
// console.log(`Code ends`);

// const promise = new Promise((resolve, reject) => {
//   reject("error");
//   setTimeout(() => {
//     resolve("Promise results");
//   }, 2000); // resolve after 1 second
// });
// console.log("Code starts");
// promise
//   .then(console.log)
//   .catch(console.log)
//   .finally(() => console.log("finally"));
// console.log("I love JS");

// let promise = new Promise(function (resolve, reject) {
//   const random = Math.random();
//   console.log(" random: ", random);
//   if (random > 0.5) setTimeout(() => resolve("done"), 1000);
//   else setTimeout(() => reject(new Error("Woops!")), 1000);
// });
// promise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Promise ready!"));

// const p = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000); // (*)
// })
//   .then(function (result) {
//     console.log(result); // 1
//     return result * 2;
//   })
//   .then(function (result) {
//     console.log(result); // 2
//     return result * 2;
//   })
//   .then(function (result) {
//     console.log(result); // 4
//     return result * 2;
//   });

// p.then((r) => console.log(r)).catch((e) => console.log(e));

// console.log("start");
// async function foo() {
//   return " done ! ";
// }
// async function bar() {
//   console.log(" insidebar - start");
//   let result = await foo();
//   console.log(result);
//   console.log("insidebar - end");
// }
// bar();
// console.log("end");

// setTimeout(() => { console.log('timeout'); }, 0);
// setImmediate(() => { console.log('immediate'); });
// process.nextTick(()=> console.log('nexttick'));

// setTimeout(() => console.log("this is setTimeout..."), 0);
// setImmediate(() => { console.log('immediate'); });

// import fs from "fs";

// process.nextTick(() => console.log("nextTick 1"));

// Promise.resolve().then(() => console.log("promise 1"));

// setImmediate(() => {
//   console.log("setImmediate 1");
// });

// setTimeout(() => console.log("setTimeout 1"), 0);

// fs.readFile("./files/input.txt", "utf-8", (err, data) => {
//   if (err) console.log("there is an error. can not read from file");
//   else {
//     console.log(data);
//   }
// });

// let arr = [1, 2, 3, 4, 5];
// arr.splice(2, 1, 6);
// let newArr = arr.map(x => x * 2);
// console.log(newArr);

// const obj = {
//     name : "String",
//     age : 50,
//     toString() {

//     },
//     honk: () => {

//     },
//     smell: function() {

//     }
// }

// // const obj2 = JSON.parse(JSON.stringify(obj))
// const obj2 = structuredClone(obj)
// console.log(obj2);

// let fruits = ['apple', 'banana', 'grape', 'orange'];
// let filteredFruits = fruits.filter(fruit => fruit.includes('a'));
// let index = filteredFruits.findIndex(fruit => fruit === 'banana');
// console.log(index);

// let numbers = [10, 20, 30];
// let total = numbers.reduce((acc, num) => acc + num, 0);
// let updatedNumbers = numbers.map(num => num / total);
// console.log(updatedNumbers);

// function removeAndReplace(arr, index, count, newItem) {
//     arr.splice(index, count, newItem);
//     return arr;
// }

// console.log(removeAndReplace([1, 2, 3, 4, 5], 1, 2, 99));
// Expected output: [1, 99, 4, 5]

// function getEvenNumbers(arr) {
//   return arr.filter((x) => x % 2 == 0);
// }

// console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));

// function squareNumbers(arr) {
//   return arr.map((x) => x * x);
// }

// console.log(squareNumbers([2, 3, 4]));

// function sumArray(arr) {
//   return arr.reduce((acc, ele) => acc + ele, 0);
// }

// console.log(sumArray([10, 20, 30]));

// function findFirstNegative(arr) {
//   return arr.find((x) => x < 0);
// }

// console.log(findFirstNegative([5, 3, -1, 7, -3]));

// function removeAtIndex(arr, index) {
//   arr.splice(index, 1);
//   return arr;
// }

// console.log(removeAtIndex([1, 2, 3, 4], 2));

// function splice2(arr, e1, e2) {
//   arr.splice(1, 2, e1, e2);
//   return arr;
// }

// console.log(splice2([1, 2, 3, 4, 5], 'a', 'b'));  // [1, 'a', 'b', 4, 5]
// console.log(splice2([1, 2], 'a', 'b'));           // [1, 'a', 'b']
// console.log(splice2([1, 2, 3, 4], 'a', 'b'));     // [1, 'a', 'b', 4]
// console.log(splice2([1], 'a', 'b'));              // [1, 'a', 'b']
// console.log(splice2([], 'a', 'b'));               // ['a', 'b']
// console.log(splice2([[1], [2, 3], [4, 5]], 'a', 'b')); // [[1], 'a', 'b', [4, 5]]

// function splice3(arr) {
//   arr.splice(arr.length - 3, 3);
//   return arr;
// }

// console.log(splice3([1, 2, 3, 4, 5]));       // [1, 2]
// console.log(splice3([1, 2, 3]));             // []
// console.log(splice3([1, 2, 3, 4]));          // [1]
// console.log(splice3([1, 2]));                // [1, 2] (no change since less than 3 elements)
// console.log(splice3([1, 2, 3, 4, 5, 6]));    // [1, 2, 3]
// console.log(splice3([10, 20, 30, 40, 50]));  // [10, 20]
// console.log(splice3([[1], [2], [3], [4]]));  // [[1]]

// function splice4(arr) {
//   arr.splice(2, 0, "a", "b", "c");
//   return arr;
// }

// console.log(splice4([1, 2, 3, 4, 5]));
// console.log(splice4([1, 2]));
// console.log(splice4([1]));
// console.log(splice4([]));
// console.log(splice4([10, 20, 30]));
// console.log(splice4([100, 200, 300, 400, 500]));
// console.log(splice4([true, false, null, undefined]));

// function splice5(arr) {
//   arr.splice(0, 2);
//   return arr;
// }

// console.log(splice5([1, 2, 3, 4, 5]));       // [3, 4, 5]
// console.log(splice5([1, 2]));                  // []
// console.log(splice5([1]));                      // []
// console.log(splice5([]));                       // []
// console.log(splice5([10, 20, 30, 40]));       // [30, 40]
// console.log(splice5(['a', 'b', 'c', 'd']));   // ['c', 'd']
// console.log(splice5([true, false, null]));     // [null]

// function filterAdults(arr) {
//   return arr.filter((x) => x >= 18);
// }

// console.log(filterAdults([10, 18, 21, 14, 30]));

// function filter4(arr) {
//   return arr.filter((x) => x.status === "active");
// }

// console.log(filter4([{ status: 'active' }, { status: 'inactive' }, { status: 'active' }]));
// // [{ status: 'active' }, { status: 'active' }]

// console.log(filter4([{ status: 'inactive' }, { status: 'inactive' }]));
// // []

// console.log(filter4([{ status: 'active' }, { status: 'active' }, { status: 'active' }]));
// // [{ status: 'active' }, { status: 'active' }, { status: 'active' }]

// console.log(filter4([{ status: 'pending' }, { status: 'active' }, { status: 'archived' }]));
// // [{ status: 'active' }]

// console.log(filter4([]));
// // []

// console.log(filter4([{ status: 'active' }, { status: null }, { status: 'active' }]));
// // [{ status: 'active' }, { status: 'active' }]

// console.log(filter4([{ status: 'active' }, { name: 'John' }, { status: 'inactive' }]));
// // [{ status: 'active' }]

// function reduce3(arr, n) {
//   return arr.reduce((acc, e) => {
//     if (e === n) acc++;
//     return acc;
//   }, 0);
// }

// console.log(reduce3([1, 2, 3, 4, 2, 2], 2)); // 3
// console.log(reduce3([1, 1, 1, 1, 1], 1)); // 5
// console.log(reduce3([5, 6, 7, 8, 9], 10)); // 0
// console.log(reduce3(["apple", "banana", "apple"], "apple")); // 2
// console.log(reduce3([], 1)); // 0
// console.log(reduce3([true, false, true, true], true)); // 3
// console.log(reduce3([null, undefined, null], null)); // 2

// function reduce4(arr) {
//   return arr.reduce((acc, e) => acc ? acc + " " + e : e, "");
// }

// console.log(reduce4(['Hello', 'world', '!']));                // 'Hello world !'
// console.log(reduce4(['This', 'is', 'a', 'test', '.']));      // 'This is a test .'
// console.log(reduce4(['JavaScript', 'is', 'fun']));           // 'JavaScript is fun'
// console.log(reduce4([]));                                     // ''
// console.log(reduce4(['One', 'two', 'three', 'four']));      // 'One two three four'
// console.log(reduce4(['Concat', 'these', 'strings']));       // 'Concat these strings'
// console.log(reduce4(['Coding', 'is', 'great', '!']));       // 'Coding is great !'

// function reduce5(arr) {
//   return arr.reduce((acc, e) => (e > acc ? e : acc), -Infinity);
// }

// console.log(reduce5([1, 2, 3, 4, 5]));              // 5
// console.log(reduce5([-10, -5, 0, 5, 10]));         // 10
// console.log(reduce5([100, 200, 300, 400]));        // 400
// console.log(reduce5([-1, -2, -3, -4, -5]));        // -1
// console.log(reduce5([7, 5, 3, 9, 2]));              // 9
// console.log(reduce5([0]));                          // 0
// console.log(reduce5([]));                           // undefined or handle it as per your implementation

// function find3(arr) {
//   return arr.find((x) => x.startsWith("A"));
// }

// function getAdultNames(users) {
//   return users.filter((x) => x.age >= 18).map((x) => x.name.toUpperCase());
// }

// // Example input
// const users = [
//   { name: "Alice", age: 17 },
//   { name: "Bob", age: 20 },
//   { name: "Charlie", age: 19 },
// ];
// console.log(getAdultNames(users));
// Expected output: ['BOB', 'CHARLIE']

// function totalEvenNumbers(arr) {
//   return arr.filter((x) => x % 2 === 0).reduce((acc, e) => acc + e, 0);
// }

// // Example input
// console.log(totalEvenNumbers([1, 2, 3, 4, 5, 6]));
// // Expected output: 12 (2 + 4 + 6)

// function removeAndPrint(arr, index, count) {
//     arr.splice(index, count).forEach(x => console.log(x));
//   }

//   // Example input
//   removeAndPrint([1, 2, 3, 4, 5], 1, 2);
// Expected output: 2, 3

// function findUserIndex(users, name) {
//   return users.findIndex((x) => x.name === name);
// }

// // Example input
// const users = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
// console.log(findUserIndex(users, "Bob"));
// // Expected output: 1

// function calculateAverage(arr) {
//   return arr.map((x) => x * x).reduce((acc, e) => acc + e, 0) / arr.length;
// }

// // Example input
// console.log(calculateAverage([2, 3, 4]));
// // Expected output: 9.666... (average of 4, 9, 16)

// function findFirstLongWord(words) {
//   return words.filter((e) => e.length >= 5).find((e) => e.length > 5);
// }

// // Example input
// const words = ["cat", "dog", "elephant", "tiger", "zebra"];
// console.log(findFirstLongWord(words));
// Expected output: 'elephant'

// function printUserAges(users) {
//   users.map((x) => x.age >=18 ? x.age : "Minor").forEach(x => console.log(x));
// }

// // Example input
// const users = [
//   { name: "Alice", age: 17 },
//   { name: "Bob", age: 20 },
//   { name: "Charlie", age: 19 },
// ];
// printUserAges(users);

// function filterAndSquare(arr) {
//   return arr.filter((x) => x >= 10).map((x) => x * x);
// }

// // Example input
// console.log(filterAndSquare([5, 10, 15, 20]));
// Expected output: [100, 225, 400]

// function removeUserByName(users, name) {
//   let index = users.findIndex((x) => x.name === name);
//   if (index >= 0) users.splice(index, 1);
//   return users;
// }

// // Example input
// const users = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
// console.log(removeUserByName(users, "Bob"));
// Expected output: [{ name: 'Alice' }, { name: 'Charlie' }]

// function calculateTotalPrice(items) {
//   console.log(items.reduce((acc, e) => acc + e.price, 0));
// }

// // Example input
// const items = [
//   { name: "Item1", price: 10 },
//   { name: "Item2", price: 15 },
//   { name: "Item3", price: 20 },
// ];
// calculateTotalPrice(items);

// function a() {
//   console.log(x); // consult Global for x and print 20 from Global
// }
// function b() {
//   const x = 10;
//   a(); // consult Global for a
// }
// const x = 20;
// b();

// function b() {
//   function a() {
//     console.log(x);
//   }
//   const x = 10;
//   a();
// }
// const x = 20;
// b();

// let user = {
//   firstName: "John",
//   sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//   },
// };
// user.sayHi(); //works
// let hi = user.sayHi();
// hi.bind(user)(); //works
// hi.call(user); //works
// hi.apply(user);

// const user = {
//   salute: "",
//   greet: function () {
//     this.salute = "Hello";
//     console.log(this.salute); //Hello
//     const setFrench = function (newSalute) {
//       //inner function
//       this.salute = newSalute;
//     };
//     setFrench("Bonjour");
//     console.log(this.salute); //Bonjour??
//   },
// };
// user.greet.call(user);

// console.log('Start');
// new Promise((resolve, reject) => {
//     console.log('1');
//     setTimeout(()=> resolve(2), 1000);
// }).then(console.log);
// console.log('end')

// import express from "express";
// const app = express();

// app.all("/", (req, res, next) => {
//   res.send("it is use all");
// });

// app.get(
//   "/abc",
//   (req, res, next) => {
//     console.log("1");
//     next();
//   },
//   (req, res, next) => {
//     console.log("2");
//     throw new Error("Something went wrong");
//     res.send("end");
//   }
// );

// app.use((err, req, res, next) => {
//   res.send(err.message);
// });

// app.listen(3000, () => {
//   console.log("Server Started");
// });

// console.log("Start");
// process.nextTick(() => {
//   console.log("Tick 1");
//   setTimeout(() => {
//     console.log("Timeout 1");
//   }, 2000);
// });
// process.nextTick(() => {
//   console.log("Tick 2");
// });
// setImmediate(() => {
//   console.log("setImmediate");
// });
// setTimeout(() => {
//   console.log("Timeout 2");
// }, 1000);
// console.log("end");

// import fs from "fs";

// console.log("start");

// fs.readFile("input.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log("File content:", data);
//   setImmediate(() => console.log("Immediate inside file read"));
//   process.nextTick(() => console.log("Next tick inside file read"));
// });

// setImmediate(() => console.log("Immediate outside"));
// process.nextTick(() => console.log("Next tick 1"));

// Promise.resolve().then(() => console.log("Promise resolved"));

// setTimeout(() => console.log("Timeout 1"), 1000);

// console.log("end");

// import fs from "fs";

// console.log("start");

// process.nextTick(() => console.log("Next tick 1"));

// fs.readFile("input.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log("File content:", data);
//   setTimeout(() => console.log("Timeout inside file read"), 500);
// });

// setTimeout(() => console.log("Timeout 1"), 1000);
// setImmediate(() => console.log("Immediate outside"));

// Promise.resolve().then(() => console.log("Promise resolved"));

// console.log("end");

// import fs from "fs";

// console.log("start");

// fs.readFile("input.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log("File read complete:", data);
// });

// setImmediate(() => console.log("Immediate 1"));
// setTimeout(() => console.log("Timeout 1"), 1000);

// process.nextTick(() => console.log("Next tick 1"));

// Promise.resolve().then(() => console.log("Promise resolved"));

// console.log("end");

// import fs from 'fs';

// console.log('start');

// fs.readFile('input.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log('File read complete:', data);
//     setTimeout(() => console.log('Timeout inside file read'), 500);
//     setImmediate(() => {
//       console.log('Immediate inside file read');
//       process.nextTick(() => console.log('Next tick inside file read immediate'));
//       Promise.resolve().then(() => console.log('Promise resolved inside  file read immediate'));
//     });
//     process.nextTick(() => console.log('Next tick inside file read'));
// });

// setImmediate(() => console.log('Immediate 1'));
// process.nextTick(() => console.log('Next tick 1'));
// Promise.resolve().then(() => console.log('Promise resolved'));
// Promise.resolve().then(() => console.log('Promise resolved 2'));
// setTimeout(() => console.log('Timeout 1'), 1000);

// console.log('end');

import fs from "fs";

console.log("start");

setImmediate(() => console.log("Immediate 1"));
process.nextTick(() => console.log("Next tick 1"));

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("File read complete:", data);
  process.nextTick(() => console.log("Next tick inside file read"));
  setTimeout(() => console.log("Timeout inside file read"), 0);
});

Promise.resolve().then(() => {
  console.log("Promise resolved");
  setImmediate(() => console.log("Immediate inside promise"));
});

setTimeout(() => console.log("Timeout 1"), 500);

console.log("end");
