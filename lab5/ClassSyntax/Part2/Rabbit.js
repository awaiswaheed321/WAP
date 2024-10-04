import { Animal } from "./Animal.js";

export class Rabbit extends Animal {
  constructor(name, speed) {
    super(name, speed);
  }
  hide() {
    console.log("Rabbit hides");
  }
}
