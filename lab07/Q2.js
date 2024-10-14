async function question2() {
  console.log("start");
  for (let i = 0; i < 10; i++) {
    const n = getRandomNaturalNumber();
    try {
      const res = await isPrime(n);
      console.log(`${n} is: ${JSON.stringify(res)}`);
    } catch (err) {
      console.error(`${n} is: ${JSON.stringify(err)}`);
    }
  }
  console.log("end");
}

async function isPrime(n) {
  return new Promise((resolve, reject) => {
    if (n <= 1) {
      return reject({ prime: false });
    }
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
      if (n % i === 0) {
        return resolve({ prime: false });
      }
    }
    resolve({ prime: true });
  });
}

function getRandomNaturalNumber() {
  return Math.floor(Math.random() * 1000) + 1;
}

question2();
