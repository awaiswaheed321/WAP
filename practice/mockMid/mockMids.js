// Q1
// const numbers = [1, 5, 18, 2, 77, 108];
// console.log(numbers.filter((x) => x % 2 !== 0));

// Q2
// function sum(arr) {
//   return arr.filter((x) => x > 20).reduce((a, b) => a + b, 0);
// }

// console.log(sum([10, 20, 50, 30, 8]));

// Q3
// const getNewArr = (arr) => {
//   return arr.filter((x) => x.length >= 5).filter((x) => x.includes("a"));
// };

// console.log(
//   getNewArr(["Hello", "Wonderful", "Happy", "People", "Have a great day"])
// );

// Q4-a
// var a = 2;
// let b = 3;
// function outer() {
//   let c = 5;
//   var d = 7;
//   return function inner() {
//     b = 8;
//     let c = 9;
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
//   };
// }

// outer()();

// Q4-B
// function log(e) {
//   console.log(e);
// }

// let arr = [1, 2, 3];
// console.log("start");
// setTimeout(() => arr.forEach(log));
// console.log("end");

// Q4-C
// function log(e) {
//   console.log(e);
// }

// let arr = [1, 2, 3];
// console.log("start");
// arr.forEach(log);
// console.log("end");

// Q6
// const students = [
//   { name: "Quincy", grades: [99, 88], courses: ["cs301", "cs303"] },
//   { name: "Jason", grades: [29, 38], courses: ["cs201", "cs303"] },
//   { name: "Alex", grades: [79, 78], courses: ["cs105", "cs211"] },
//   { name: "Sam", grades: [91, 82], courses: ["cs445", "cs303"] },
//   { name: "Katie", grades: [66, 77], courses: ["cs477", "cs303"] },
// ];

// const compute = (arr) => {
//   return arr
//     .filter((x) => x.courses.includes("cs303"))
//     .map((x) => {
//       return {
//         [x.name]: x.grades.reduce((a, b) => a + b, 0) / x.grades.length,
//       };
//     });
// };

// console.log(JSON.stringify(compute(students)));

// function loginUser(u, p) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const isValid = u === "user" && p === "password";
//       if (isValid) {
//         resolve({ token: "12345", message: "Login successful" });
//       } else {
//         reject({ error: "Invalid Credentials", statusCode: 401 });
//       }
//     }, 1000);
//   });
// }

// function fetchUserProfile(token) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (token === "12345") {
//         resolve({ name: "John Doe", email: "john@example.com" });
//       } else {
//         reject({ error: "Invalid token", statusCode: 403 });
//       }
//     }, 1000);
//   });
// }

// try {
//   const res = await loginUser("user", "password");
//   console.log(res.message);
//   const profile = await fetchUserProfile(res.token);
//   console.log(`Name: ${profile.name}, Email: ${profile.email}`);
// } catch (err) {
//   console.error(`Error: ${err.error} (StatusCode: ${err.statusCode})`);
// }

// Q10 my answer
// function Vehicle(make, model, year, mileage) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.mileage = mileage;
// }

// Vehicle.prototype.drive = (m) => {
//   this.mileage += m;
// };

// Vehicle.prototype.toString = () => {
//   return `${this.year} ${this.make} ${this.model} (${this.mileage} miles)`;
// };

// function Car(make, model, year, mileage, numDoors, speed, topSpeed) {
//   super(make, model, year, mileage);
//   this.numDoors = numDoors;
//   this.speed = speed;
//   this.topSpeed = topSpeed;
// }

// Car.prototype.accelerate = () => {
//   this.speed += 10;
// };

// Car.prototype.brake = () => {
//   this.speed -= 10;
// };

// Car.prototype.toString = () => {
//   return `${this.year} ${this.make} ${this.model} (${this.mileage} miles) ${this.numDoors} ${this.topSpeed} mph`;
// };

// Object.setPrototypeOf(Car, Vehicle);
// Object.setPrototypeOf(Car.prototype, Vehicle.prototype);

// let car = new Car("Ford", "Mustang", 2024, 5000, 2, 50, 250);
// car.accelerate();
// car.accelerate();
// car.brake();
// console.log(car.toString());

// let vehicle = new Vehicle("Chevrette", "Chevy", 2020, 10000);
// vehicle.drive(50);
// console.log(vehicle.toString());

// Q10 correct Answer
// function Vehicle(make, model, year, mileage) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.mileage = mileage;
// }

// Vehicle.prototype.drive = function(m) {
//   this.mileage += m;
// };

// Vehicle.prototype.toString = function() {
//   return `${this.year} ${this.make} ${this.model} (${this.mileage} miles)`;
// };

// function Car(make, model, year, mileage, numDoors, speed, topSpeed) {
//   // Call the Vehicle constructor
//   Vehicle.call(this, make, model, year, mileage);
//   this.numDoors = numDoors;
//   this.speed = speed;
//   this.topSpeed = topSpeed;
// }

// // Inherit from Vehicle
// Object.setPrototypeOf(Car, Vehicle);
// Object.setPrototypeOf(Car.prototype, Vehicle.prototype);

// Car.prototype.accelerate = function() {
//   this.speed += 10;
// };

// Car.prototype.brake = function() {
//   this.speed -= 10;
// };

// Car.prototype.toString = function() {
//   return `${this.year} ${this.make} ${this.model} (${this.mileage} miles), ${this.numDoors} doors, ${this.topSpeed} mph`;
// };

// // Example usage
// let car = new Car("Ford", "Mustang", 2024, 5000, 2, 50, 250);
// car.accelerate();
// car.accelerate();
// car.brake();
// console.log(car.toString());

// let vehicle = new Vehicle("Chevrette", "Chevy", 2020, 10000);
// vehicle.drive(50);
// console.log(vehicle.toString());

// Q11

// let group = {
//   title: "Our group",
//   students: ["John", "Pete", "Alice"],
//   showList: function () {
//     this.students.forEach(
//       function (student) {
//         console.log(this.title + ": " + student);
//       }.bind(this)
//     );
//   },
// };

// group.showList();

let group = {
  title: "Our group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
    let ref = this;
    this.students.forEach(function (student) {
      console.log(ref.title + ": " + student);
    });
  },
};

group.showList();
