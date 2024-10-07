question2();

function question2() {
  console.log("start");
  for (let i = 0; i < 10; i++) {
    const n = getRandomNaturalNumber();
    isPrime(n)
      .then((res) => {
        console.log(`${n} is: ${JSON.stringify(res)}`);
      })
      .catch((err) => {
        console.error(`${n} is: ${JSON.stringify(err)}`);
      });
  }
  console.log("end");
}

function isPrime(n) {
  return new Promise((resolve, reject) => {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
      if (n % i === 0) reject({ prime: false });
    }
    if (n > 1) {
      resolve({ prime: true });
    } else {
      reject({ prime: false });
    }
  });
}

function getRandomNaturalNumber() {
  return Math.floor(Math.random() * 1000) + 1;
}
