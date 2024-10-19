import { Calculator } from "./Calculator.js";

function testCalculator() {
  console.log("Testing Calculator...");
  console.log(`Addition (2 + 3): ${Calculator.add(2, 3)} === 5`);
  console.log(`Subtraction (5 - 3): ${Calculator.subtract(5, 3)} === 2`);
  console.log(`Multiplication (4 * 5): ${Calculator.multiply(4, 5)} === 20`);
  console.log(`Division (10 / 2): ${Calculator.divide(10, 2)} === 5`);

  try {
    Calculator.divide(10, 0);
  } catch (error: any) {
    console.log(`Division by zero (10 / 0): Caught error - "${error.message}"`);
  }
}

testCalculator();
