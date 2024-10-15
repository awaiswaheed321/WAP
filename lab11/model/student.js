const students = [
  { id: 116257, name: "Anna Smith", program: "MBA" },
  { id: 615789, name: "John Doe", program: "Compro" },
  { id: 116868, name: "Tom Jerryh", program: "MBA" },
];

export default class Student {
  constructor(id, name, program) {
    this.id = id;
    this.name = name;
    this.program = program;
  }
  static getAll() {
    return structuredClone(students); //students.map(e=>e)
  }
  static getStudentById(id) {
    return students.find((e) => e.id === id);
  }

  create() {
    let student = students.find((e) => e.id == this.id);
    if (!student) {
      students.push(this);
      return this;
    }
  }

  static deleteById(id) {
    const index = students.findIndex((e) => e.id == id);
    if (index !== -1) {
      return students.splice(index, 1)[0];
    }
  }

  static sorting(field, order) {
    return (e1, e2) => {
      return typeof e1[field] === "number"
        ? order * (e1[field] - e2[field])
        : order * e1[field].localeCompare(e2[field]);
    };
  }

  static sortBy(field, order) {
    return Student.getAll().sort(this.sorting(field, order));
  }

  static getStudentsByProgramSorted(program, field, order) {
    return this.getStudentsByProgram(program).sort(this.sorting(field, order));
  }

  static getStudentsByProgram(program) {
    return students.filter(
      (s) => s.program.toUpperCase() === program.toUpperCase()
    );
  }

  static updateStudent(id, newName, newProgram) {
    const index = students.findIndex((s) => s.id === id);
    if (index === -1) {
      return null;
    }
    if (newName && newName.trim().length > 0) {
      students[index].name = newName.trim();
    }
    if (newProgram && newProgram.trim().length > 0) {
      students[index].program = newProgram.trim();
    }
    return students[index];
  }
}
