// enum Names {

//   "John" = "ABC",
//   "Anna" = "123",
//   "Doe" = 5,
//   "Smith"
// }

// // console.log(Names[1]);
// // console.log(Names["John"]);
// console.log(Names)

// type func = (s1: string, s2: string) => string;
// const f1: func = (s1, s2) => s1.concat(s2);

// console.log(f1("hello", "world"));

// let code: any = "abc";
// let courseCode = <number> code;
// console.log(courseCode + 1);

// interface Person {
//   name: string;
//   age: number;
//   email?: string
// };

// const p1 : Person= {name: "a1", age:40}

// interface Person {
//     name: string;
//     age: number;
//    }
//    interface Tech {
//     phone: string;
//     laptop: string;
//    }

// type Person = {
//   firstname: string;
//   lastname: string;
//   age: number;
//   height: number;
//   weight: number;
// }
// type NamedPerson = Pick<Person, "firstname" | "lastname">;
// const anna: NamedPerson = { firstname: "Anna", lastname: "Smith" };
// type SomePerson = Partial<Person>;
// const mike: SomePerson = { firstname: "Mike", height: 180 };
// type JustName = Omit<Person, "age" | "height" | "weight">;
// const smith: JustName = { firstname: "Smith", lastname: "John" };

type Person = {
  name: string;
};

type Employee = Person & {
  employeeId: number;
};

const employee: Employee = {
  name: "Alice",
  employeeId: 12345,
};
