import Student from "../model/student.js";

const studentController = {
  // Get All Students
  getStudents: (req, res, next) => {
    if (Object.keys(req.query).length === 0) {
      return res.status(200).json(Student.getAll());
    }
    next();
  },
  // Get Student by ID
  getStudentById: (req, res, next) => {
    const id = req.params.id;
    if (id) {
      console.log(typeof id);
      const student = Student.getStudentById(id * 1);
      if (student) {
        res.status(200).json(student);
      } else res.status(404).json({ message: "Not found a student" });
    } else res.status(400).json({ message: "provide id" });
  },
  // Create Student
  createStudent: (req, res, next) => {
    const { id, name, program } = req.body;
    if (id && name && program) {
      const student = new Student(id, name, program);
      if (student.create()) res.status(201).json({ message: "created" });
      else res.status(409).json({ message: "student is already existed" });
    } else {
      res.status(400).json({ message: "provide all information" });
    }
  },
  //   Delete Student By ID
  deleteStudentById: (req, res, next) => {
    const id = req.params.id;
    if (id) {
      if (Student.deleteById(id))
        res.status(200).json({ message: "student deleted" });
      else res.status(404).json({ message: "student not found" });
    } else res.status(400).json({ message: "provide all information" });
  },
  //   Update Student
  updateStudentById: (req, res, next) => {
    const id = req.params.id;
    const { name: newName, program: newProgram } = req.body;
    // Sending error if there is no info to update
    if (!newName && !newProgram) {
      res.status(400).json({ message: "Nothing to Update." });
      return;
    }
    const student = Student.updateStudent(id * 1, newName, newProgram);
    if (student) {
      res.status(200).json(student);
    } else {
      res.status(404).json({ message: `Student with ID: ${id} not found.` });
    }
  },
  //   Get Students with sort and filter
  getStudentsByQuerystring: (req, res, next) => {
    const { sort, order = "asc", program } = req.query;
    let students;

    if (program && sort) {
      students = Student.getStudentsByProgramSorted(
        program,
        sort,
        order === "asc" ? 1 : -1
      );
    } else if (program) {
      students = Student.getStudentsByProgram(program);
    } else if (sort) {
      students = Student.sortBy(sort, order === "asc" ? 1 : -1);
    } else {
      students = Student.getAll();
    }

    res.status(200).json(students);
  },
};

export default studentController;
