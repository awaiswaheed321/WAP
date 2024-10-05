function Animal(n, s) {
  this.name = n;
  this.speed = s;
}

Animal.prototype.run = function () {
  this.speed += 5;
};

Animal.compareBySpeed = function (a1, a2) {
  if (a1.speed > a2.speed) return 1;
  if (a1.speed < a2.speed) return 1;
  return 0;
};

function Rabbit(n, s) {
  Animal.call(this, n, s);
}

Rabbit.prototype.hide = function () {
  console.log(this.name + " hides");
};

Object.setPrototypeOf(Rabbit, Animal);
Object.setPrototypeOf(Rabbit.prototype, Animal.prototype);

let animal1 = new Animal("Wolf", 10);
let animal2 = new Animal("Gazelle", 15);
let rabbit1 = new Rabbit("Rabbit 1", 25);
let rabbit2 = new Rabbit("Rabbit 2", 25);
console.log("Animals: ", animal1, animal2, rabbit1, rabbit2);
animal1.run();
animal2.run();
rabbit1.run();
rabbit2.run();
console.log("After increasing speed: ", animal1, animal2, rabbit1, rabbit2);
rabbit1.hide();
