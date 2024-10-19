export class Animal {
  name: string;
  speed: number;

  constructor(name: string, speed: number) {
    this.name = name;
    this.speed = speed;
  }

  run(): void {
    this.speed += 5;
  }

  static compareBySpeed(a1: Animal, a2: Animal): number {
    if (a1.speed > a2.speed) return 1;
    if (a1.speed < a2.speed) return 1;
    return 0;
  }
}
