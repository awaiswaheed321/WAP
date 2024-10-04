import { Student } from "./Student.js";
import { Question } from "./Question.js";
import { Quiz } from "./Quiz.js";

const student1 = new Student(10, "Student 10");
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11, "Student 11");
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const questions =[new Question(1, 'b'), new Question(2, 'a'), new
Question(3, 'b')];
const quiz = new Quiz(questions, students);
console.log(quiz)
let scoreforStudent10 = quiz.scoreStudentByStudentId(10);
console.log("Score for Student 10: ", scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentByStudentId(11);
console.log("Score for Student 11: ", scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5