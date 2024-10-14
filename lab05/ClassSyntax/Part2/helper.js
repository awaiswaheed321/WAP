import { Animal } from "./Animal.js";
import { Rabbit } from "./Rabbit.js";

let animal1 = new Animal("Wolf", 10);
let animal2 = new Animal("Gazelle", 15);
console.log(animal1, animal2);
let rabbit1 = new Rabbit("Rabbit 1", 25);
let rabbit2 = new Rabbit("Rabbit 2", 25);
console.log(animal1, animal2, rabbit1, rabbit2);
animal1.run();
animal2.run();
rabbit1.run();
rabbit2.run();
console.log("After increasing speed", animal1, animal2, rabbit1, rabbit2);
rabbit1.hide();
