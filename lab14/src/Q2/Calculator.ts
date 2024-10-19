export class Calculator {
  static add(p1: number, p2: number): number {
    return p1 + p2;
  }

  static subtract(p1: number, p2: number): number {
    return p1 - p2;
  }

  static multiply(p1: number, p2: number): number {
    return p1 * p2;
  }

  static divide(p1: number, p2: number): number {
    if (p2 === 0) {
      throw new Error("Can not divide with 0.");
    }
    return p1 / p2;
  }
}
