export class Animal {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  run() {
    this.speed += 5;
  }

  static compareBySpeed(a1, a2) {
    if (a1.speed > a2.speed) return 1;
    if (a1.speed < a2.speed) return 1;
    return 0;
  }
}
