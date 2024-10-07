question1();

function question1() {
  const promise = new Promise((resolve, reject) => {
    console.log("Start Meditation");
    resolve(5);
  })
    .then((res) => {
      console.log(res);
      return res - 1;
    })
    .then((res) => {
      console.log(res);
      return res - 1;
    })
    .then((res) => {
      console.log(res);
      return res - 1;
    })
    .then((res) => {
      console.log(res);
      return res - 1;
    })
    .then((res) => {
      console.log(res);
    })
    .finally(() => console.log("Meditation Started"));
}
