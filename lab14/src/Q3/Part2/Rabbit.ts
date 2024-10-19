import { Animal } from "./Animal.js";

export class Rabbit extends Animal {
  constructor(name: string, speed: number) {
    super(name, speed);
  }
  hide(): void {
    console.log(this.name + " hides");
  }
}
