function performQuestion2() {
  // Question 2
  console.log("**********Question 2: Destruct**********");
  const destruct = (user) => {
    let { name: fName, years: age, isAdmin = false } = user;
    console.log("Name: ", fName);
    console.log("Age: ", age);
    console.log("Is Admin: ", isAdmin);
  };
  console.log("Example 1 => ");
  destruct({ name: "John", years: 30 });
  console.log("Example 2 => ");
  destruct({ name: "John", years: 30, isAdmin: true });
}

export { performQuestion2 };
