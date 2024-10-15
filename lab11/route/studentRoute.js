import studentController from "../controller/studentController.js";
import express from "express";

const router = express.Router();

router
  .route("/")
  .get(
    studentController.getStudents,
    studentController.getStudentsByQuerystring
  )
  .post(studentController.createStudent);

router
  .route("/:id")
  .delete(studentController.deleteStudentById)
  .put(studentController.updateStudentById)
  .get(studentController.getStudentById);

export default router;
