question1();

function question1() {
  console.log("Start Meditation...");
  let timer = 5;
  const interval = setInterval(() => {
    console.log(timer--);
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
    console.log("Meditation Started...");
  }, 6000);
}
