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

import fs from "fs";

process.nextTick(() => console.log("nextTick 1"));

Promise.resolve().then(() => console.log("promise 1"));

setImmediate(() => {
  console.log("setImmediate 1");
});

setTimeout(() => console.log("setTimeout 1"), 0);

fs.readFile("./files/input.txt", "utf-8", (err, data) => {
  if (err) console.log("there is an error. can not read from file");
  else {
    console.log(data);
  }
});
