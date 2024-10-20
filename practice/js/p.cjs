// const fs = require("fs");
// fs.readFile("JSPracticeQuestions.txt", "utf-8", (err, data) => {
//   if (err) console.log(err);
//   else console.log(data);
// });

// const fs = require('fs');
//you may assume input.txt is in the same folder
// const rd = fs.createReadStream("input.txt");
// rd.close();
// rd.on("close", () => console.log('readableStream close event'))
// fs.readFile('input.txt', "utf-8", (error, data) => {
//     if (error) console.log(error);
//     else console.log(data)
// });
// setTimeout(() => console.log("this is setTimeout"), 5000);
// setTimeout(() => console.log("this is setTimeout"), 0);
 
// setImmediate(() => console.log("this is setImmediate 1"));
// setImmediate(() => {
//     console.log("this is setImmediate 2")
//     Promise.resolve().then(() => console.log('Promise.resolve inside setImmediate'));
// });
// Promise.resolve().then(() => console.log('Promise.resolve 1'));
// Promise.resolve().then(() => {
//     console.log('Promise.resolve 2')
//     process.nextTick(() => console.log('nextTick inside Promise'));
// });
// process.nextTick(() => console.log('nextTick 1'));


// import fs from "fs";

// process.nextTick(() => console.log("nextTick 1"));

// Promise.resolve().then(() => console.log("promise 1"));

// setImmediate(() => {
//   console.log("setImmediate 1");
// });

// setTimeout(() => console.log("setTimeout 1"), 0);

// fs.readFile("./input.txt", "utf-8", (err, data) => {
//   if (err) console.log("there is an error. can not read from file");
//   else {
//     console.log(data);
//   }
// });

// let str = "Greetings, ";
// let user = {
//   firstName: "John",
//   lastName: "Smith",
//   display: function () {
//     console.log(str, this.firstName);
//     show("hi");
//   },
// };
// user.display();
// function show(msg) {
//   console.log(msg + " " + this.lastName);
// }
// show.call(user, "hello");

// var name = "globalName";
// let person = {
//   name: "John Doe",
//   printName: function () {
//     console.log(this.name); // ?
//     function innerFunc() {
//       console.log(this.name); // ?
//     }
//     innerFunc();
//   },
// };
// person.printName();

// let car = {
//   brand: "Toyota",
//   getBrand: function() {
//     return () => {
//       console.log(this.brand); // ?
//     };
//   }
// };
// let getCarBrand = car.getBrand();
// getCarBrand();

// let counter = 0;
// function increment() {
//   let count = 0;
//   return function add() {
//     count++;
//     counter++;
//     console.log(count); // ?
//     console.log(counter); // ?
//   };
// }
// let addCount = increment();
// addCount();
// addCount();

// (function() {
//   var localVar = "I am local";
//   console.log(localVar); // ?
// })();
// console.log(localVar); // ?

// let team = {
//   name: "Warriors",
//   members: ["Alice", "Bob", "Charlie"],
//   showTeam: function() {
//     this.members.forEach(function(member) {
//       console.log(this.name + ": " + member); // ?
//     }.bind(this));
//   }
// };
// team.showTeam();

// console.log('start');
// async function foo() {
// return ' done ! ';
// }
// async function bar() {
// console.log(' insidebar - start');
// let result = await foo();
// console.log(result);
// console.log('insidebar - end');
// }
// bar();
// console.log('end');

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Success!"), 1000);
// });
// myPromise.then(result => console.log(result));

// const failingPromise = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Failed!"), 1000);
// });
// failingPromise
//   .then(result => console.log(result))
//   .catch(error => console.error(error));

// const promiseChain = new Promise((resolve) => {
//   resolve(5);
// });

// promiseChain
//   .then(value => value * 2)
//   .then(value => value + 3)
//   .then(value => console.log(value));

// const promise1 = Promise.resolve(1);
// const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 1000));
// const promise3 = Promise.resolve(3);

// Promise.all([promise1, promise2, promise3]).then(results => {
//   console.log(results);
// });

// const promiseA = new Promise((resolve) => setTimeout(() => resolve("A"), 2000));
// const promiseB = new Promise((resolve) => setTimeout(() => resolve("B"), 6000));

// Promise.race([promiseA, promiseB]).then(result => {
//   console.log(result);
// });

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Something went wrong!"), 1000);
// });

// myPromise
//   .then(result => console.log(result))
//   .catch(error => {
//     console.error(error);
//     return "Recovered!";
//   })
//   .then(result => console.log(result));

// console.log("Start Interval");
// const intervalId = setInterval(() => {
//   console.log("Interval Running");
// }, 1000);
// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log("Interval Cleared");
// }, 5000);

// console.log("Before Timeout");
// setTimeout(() => console.log("This is a timeout"), 0);
// console.log("After Timeout");

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// let count = 10;

// let id = setInterval(() => {
//   console.log(count--);
//   if(count === -1) {
//     clearInterval(id)
//   }
// }, 200)

// let id1 = setInterval(() => {
//   console.log("Interval 1");
// }, 500);

// let id2 = setInterval(() => {
//   console.log("Interval 2");
// }, 1000);

// setTimeout(() => {
//   clearInterval(id1);
//   clearInterval(id2);
// }, 5000)
// console.log('Start');
// new Promise((resolve, reject) => {
//     console.log('1');
//     setTimeout(()=> resolve(2), 1000);
// }).then(console.log);
// console.log('end')

// setTimeout(() => console.log("settimeout 1"), 0);
// setTimeout(() => {
//   console.log("settimeout 2");
//   process.nextTick(() => console.log("nextTick inside setTimeout"));
// }, 0);
// setTimeout(() => console.log("settimeout 3"), 0);
// Promise.resolve().then(() => console.log("Promise.resolve 1"));
// Promise.resolve().then(() => console.log("Promise.resolve 2"));
// process.nextTick(() => console.log("nextTick 1"));
// process.nextTick(() => console.log("nextTick 2"));

// const fs = require("fs");
// fs.readFile("hello.txt", (err, data) => {
//   if (err) console.log("error");
//   else console.log("readFile");
// });
// setTimeout(() => console.log("this is setTimeout"), 0);
// setImmediate(() => console.log("this is setImmediate"), 0);
// Promise.resolve().then(() => console.log("Promise.resolve 1"));
// process.nextTick(() => console.log("nextTick 1"));

// const fs = require("fs");
// const rd = fs.createReadStream("input.txt");
// rd.on("error", (err) => {
//   console.error("Error while reading the file:", err.message);
// });
// rd.close();
// rd.on("close", () => console.log("readablStream close event"));
// setTimeout(() => console.log("this is setTimeout"), 0);
// setImmediate(() => console.log("this is setImmediate"), 0);
// Promise.resolve().then(() => console.log("Promise.resolve 1"));
// process.nextTick(() => console.log("nextTick 1"));

// const fs = require('fs');

// console.log('start');

// fs.readFile('input.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log('File read complete:', data);
//     process.nextTick(() => console.log('Next tick inside readFile'));
//     setImmediate(() => console.log('Immediate inside readFile'));
// });

// setTimeout(() => console.log('Timeout 1'), 0);
// setImmediate(() => console.log('setImmediate outside'));
// process.nextTick(() => console.log('Next tick 1'));

// console.log('end');

// const fs = require("fs");

// console.log("start"); //1

// process.nextTick(() => console.log("Next tick 1")); //3
// setTimeout(() => console.log("Timeout 1"), 500);//10

// fs.readFile("input.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log("File content:", data);//6
//   setImmediate(() => console.log("Immediate inside file read"));//8
//   setTimeout(() => console.log("Timeout inside file read"), 100);//9
//   process.nextTick(() => console.log("Next tick inside file read"));//7
// });

// setImmediate(() => console.log("Immediate outside"));//4
// console.log("end"); //2

// const fs = require('fs');

// console.log('start');

// setTimeout(() => console.log('Timeout 1'), 0);
// setImmediate(() => console.log('Immediate 1'));

// fs.readFile('input.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log('File read complete');
//     setTimeout(() => console.log('Timeout inside file read'), 500);
//     setImmediate(() => console.log('Immediate inside file read'));
// });

// process.nextTick(() => console.log('Next tick 1'));

// console.log('end');

// const fs = require('fs');

// console.log('start');

// fs.readFile('input.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log('File read complete:', data);
//     setTimeout(() => console.log('Timeout inside file read'), 1000);
//     process.nextTick(() => console.log('Next tick inside file read'));
// });

// setTimeout(() => console.log('Timeout 1'), 10);
// setImmediate(() => console.log('Immediate outside'));

// process.nextTick(() => console.log('Next tick 1'));

// console.log('end');

// const fs = require("fs");

// console.log("start");

// process.nextTick(() => console.log("Next tick 1"));
// setImmediate(() => console.log("Immediate 1"));

// fs.readFile("input.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log("File content:", data);
// });

// setTimeout(() => {
//   console.log("Timeout 1");
//   setTimeout(() => console.log("Timeout inside timeout"), 0);
// }, 0);

// setImmediate(() => console.log("Immediate 2"));

// console.log("end");

// const fs = require("fs");

// console.log("start");

// setTimeout(() => console.log("Timeout 1"), 1000);
// setTimeout(() => console.log("Timeout 2"), 0);

// fs.readFile("input.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log("File content:", data);
//   setTimeout(() => console.log("Timeout inside file read"), 0);
//   setImmediate(() => console.log("Immediate inside file read"));
// });

// process.nextTick(() => console.log("Next tick 1"));

// console.log("end");

// const fs = require("fs");

// console.log("start");

// setTimeout(() => console.log("Timeout 1"), 1000);

// fs.readFile("input.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log("File content:", data);
//   setTimeout(() => console.log("Timeout inside file read"), 500);
// });

// process.nextTick(() => console.log("Next tick 1"));

// setImmediate(() => console.log("Immediate 1"));
// setImmediate(() => console.log("Immediate 2"));

// console.log("end");

// const fs = require("fs");

// console.log("start");

// process.nextTick(() => console.log("Next tick 1"));

// fs.readFile("input.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log("File read complete:", data);
//   setTimeout(() => console.log("Timeout inside file read"), 500);
//   setImmediate(() => console.log("Immediate inside file read"));
// });

// setImmediate(() => console.log("Immediate outside"));
// process.nextTick(() => console.log("Next tick 2"));

// setTimeout(() => console.log("Timeout 1"), 1000);

// console.log("end");

// const fs = require('fs');

// console.log('start');

// fs.readFile('input.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log('File read complete:', data);
//     process.nextTick(() => console.log('Next tick inside readFile'));
//     setImmediate(() => console.log('Immediate inside readFile'));
// });

// setTimeout(() => console.log('Timeout 1'), 0);
// setImmediate(() => console.log('setImmediate outside'));
// process.nextTick(() => console.log('Next tick 1'));

// Promise.resolve().then(() => console.log('Promise resolved 1'));

// console.log('end');

// const fs = require("fs");

// console.log("start");

// process.nextTick(() => console.log("Next tick 1"));
// setTimeout(() => console.log("Timeout 1"), 500);

// fs.readFile("input.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log("File content:", data);
//   setImmediate(() => console.log("Immediate inside file read"));
//   setTimeout(() => console.log("Timeout inside file read"), 100);
//   process.nextTick(() => console.log("Next tick inside file read"));
// });

// setImmediate(() => console.log("Immediate outside"));

// Promise.resolve().then(() => {
//   console.log("Promise resolved");
//   setTimeout(() => console.log("Timeout inside Promise"), 0);
// });

// console.log("end");

// const fs = require("fs");

// console.log("start");

// setTimeout(() => console.log("Timeout 1"), 0);
// setImmediate(() => console.log("Immediate 1"));

// fs.readFile("input.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log("File read complete");
//   setTimeout(() => console.log("Timeout inside file read"), 500);
//   setImmediate(() => console.log("Immediate inside file read"));
// });

// process.nextTick(() => console.log("Next tick 1"));

// Promise.resolve().then(() => console.log("Promise resolved"));

// console.log("end");

// const fs = require("fs");

// console.log("start");

// fs.readFile("input.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log("File read complete:", data);
//   setTimeout(() => console.log("Timeout inside file read"), 1000);
//   process.nextTick(() => console.log("Next tick inside file read"));
// });

// setTimeout(() => console.log("Timeout 1"), 100);
// setImmediate(() => console.log("Immediate outside"));

// process.nextTick(() => console.log("Next tick 1"));

// Promise.resolve().then(() => console.log("Promise resolved"));

// console.log("end");

// const fs = require('fs');

// console.log('start');

// process.nextTick(() => console.log('Next tick 1'));
// setImmediate(() => console.log('Immediate 1'));

// fs.readFile('input.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log('File content:', data);
// });

// setTimeout(() => {
//     console.log('Timeout 1');
//     setTimeout(() => console.log('Timeout inside timeout'), 0);
// }, 0);

// setImmediate(() => console.log('Immediate 2'));

// Promise.resolve().then(() => console.log('Promise resolved'));

// console.log('end');

// const fs = require("fs");

// console.log("start");

// setTimeout(() => console.log("Timeout 1"), 1000);
// setTimeout(() => console.log("Timeout 2"), 0);

// fs.readFile("input.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log("File content:", data);
//   setTimeout(() => console.log("Timeout inside file read"), 0);
//   setImmediate(() => console.log("Immediate inside file read"));
// });

// process.nextTick(() => console.log("Next tick 1"));

// Promise.resolve().then(() => console.log("Promise resolved"));

// console.log("end");


