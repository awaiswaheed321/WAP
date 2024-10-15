import Student from "../model/student.js"

const studentController = {
    getStudents: (req, res, next) => {
        if (Object.keys(req.query).length === 0) {
            return res.status(200).json(Student.getAll())
        }
        next();
    },
    getStudentById: (req, res, next) => {
        const id = req.params.id;
        if (id) {
            console.log(typeof id);
            const student = Student.getStudentById(id * 1);
            if (student) {
                res.status(200).json(student);
            }
            else res.status(404).json({ message: "Not found a student" });
        }
        else res.status(400).json({ message: "provide id" });
    },
    createStudent: (req, res, next) => {
        const { id, name, program } = req.body;
        if (id && name && program) {
            const student = new Student(id, name, program);
            if (student.create())
                res.status(201).json({ message: "created" })
            else
                res.status(409).json({ message: "student is already existed" })
        }
        else {
            res.status(400).json({ message: "provide all information" })
        }
    },
    deleteStudentById: (req, res, next) => {
        const id = req.params.id;
        if (id) {
            if (Student.deleteById(id))
                res.status(200).json({ message: "student deleted" });
            else
                res.status(404).json({ message: "student not found" });
        }
        else res.status(400).json({ message: "provide all information" })
    },
    // TODO
    updateStudentById: (req, res, next) => { },
    getStudentsByQuerystring: (req, res, next) => {
        const { sort, order = 'asc', program } = req.query;
        // TODO
        if (sort && program) { }
        else if (sort) {
            let students = Student.sortBy(sort, order === 'asc' ? 1 : -1);
            res.status(200).json(students);
        }
        // TODO
        else if (program) { }
        else res.status(200).json(Student.getAll());
    },
};

export default studentController;