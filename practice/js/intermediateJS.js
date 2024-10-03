run();

function run() {
  // console.log(q22(5, 10));
  // console.log(q23(2, 3));
  // console.log(q23(5, 0));
  // console.log(q23(2, -2));
  // console.log(q24([1, 3, 5], [2, 4, 6]));
  // console.log(q26([1, 3, 5, 6], 1));
  // console.log(q27("hello my name is"));
  console.log(q30(5));
}

function q30(num1) {
  if (typeof num1 != "number" || num1 < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(num1); i++) {
    if (num1 % i == 0) {
      return false;
    }
  }
  return true;
}

function q29(num1, num2) {
  if (typeof num1 != "number" || typeof num2 != "number") {
    return null;
  }
  let x = num1,
    res = [];
  while (x <= num2) {
    let bool = true;
    for (let i = 2; i < Math.sqrt(x); i++) {
      if (x % i == 0) {
        bool = false;
        break;
      }
    }
    if (bool) {
      res.push(x);
    }
    x++;
  }
  return res;
}

// 28. Write a program that calculates the sum of the digits of a number.
function q28(num) {
  if (typeof num != "number") {
    return null;
  }
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

// Create a function that capitalizes the first letter of each word in a sentence.
function q27(str) {
  if (typeof str != "string" || str.length === 0) {
    return null;
  }
  return str
    .split(" ")
    .map((x) => {
      return x.length > 0 ? x.charAt(0).toUpperCase() + x.slice(1) : "";
    })
    .join(" ");
}

// Binary Search
function q26(arr, x) {
  if (!Array.isArray(arr)) {
    return null;
  }
  if (x < arr[0] || x > arr[arr.length - 1]) {
    return null;
  }
  return find(arr, x, 0, arr.length - 1);
}

function find(arr, x, start, end) {
  if (end < start) {
    return null;
  }
  let mid = Math.floor((end + start) / 2);
  if (x == arr[mid]) {
    return mid;
  } else if (x > arr[mid]) {
    return find(arr, x, mid + 1, end);
  } else if (x < arr[mid]) {
    return find(arr, x, start, mid - 1);
  }
}

// Write a program that generates all permutations of a given string.
function q25(str) {
  if (typeof str != "string") {
    return null;
  }
  let res = [];
}

// Implement a function that merges two sorted arrays.
function q24(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return null;
  }
  let i1 = 0,
    i2 = 0,
    res = [];
  while (i1 < arr1.length && i2 < arr2.length) {
    if (arr1[i1] <= arr2[i2]) {
      res.push(arr1[i1]);
      i1++;
    } else {
      res.push(arr2[i2]);
      i2++;
    }
  }
  return res.concat(arr1.slice(i1)).concat(arr2.slice(i2));
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
