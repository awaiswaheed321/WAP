type PersonType = {
  name: string;
  age: number;
  isStudent: boolean;
};

interface PersonInterface {
  name: string;
  age: number;
  isStudent: boolean;
}

function describePerson(p: PersonType | PersonInterface): string {
  return `Name: ${p.name}, Age: ${p.age}, Student: ${
    p.isStudent ? "true" : "false"
  }`;
}

const p1: PersonType = {
  name: "John Doe",
  age: 25,
  isStudent: false,
};

const p2: PersonType = {
  name: "Anna Smith",
  age: 22,
  isStudent: true,
};

const p3: PersonInterface = {
  name: "Lorem Ipsum",
  age: 26,
  isStudent: false,
};

const p4: PersonInterface = {
  name: "Dollar Sit",
  age: 27,
  isStudent: true,
};

console.log(describePerson(p1));
console.log(describePerson(p2));
console.log(describePerson(p3));
console.log(describePerson(p4));
