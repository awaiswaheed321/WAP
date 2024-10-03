run();

function run() {
  console.log(q22(5, 10));
  console.log(q23(2, 3));
  console.log(q23(5, 0));
  console.log(q23(2, -2));
}

// Write a program that calculates the power of a number using recursion.
function q23(v1, v2) {
  if (v2 == 0) return 1;
  if (v2 < 0) return 1 / q23(v1, Math.abs(v2));
  else return v1 * q23(v1, v2 - 1);
}

//  Create a function that returns the sum of all integers between two given numbers, inclusive.
function q22(v1, v2) {
  let sum = 0;
  while (v1 <= v2) {
    sum += v1;
    v1++;
  }
  return sum;
}

// Write a function that deep clones an object.
function q21(obj) {
  return structuredClone(obj);
}
