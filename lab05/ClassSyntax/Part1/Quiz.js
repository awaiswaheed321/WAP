export class Quiz {
  #questions;
  #students;
  constructor(questions, students) {
    this.#questions = new Map();
    questions.forEach((element) => {
      this.#questions.set(element.id, element.answer);
    });
    this.#students = students;
  }

  get questions() {
    return this.#questions;
  }

  get students() {
    return this.#students;
  }

  scoreStudentByStudentId(sid) {
    let student = this.#findStudent(sid);
    if (student == null) {
      return null;
    }
    let score = 0;
    this.#questions.forEach((ans, id) => {
      if (ans === student.findQuestion(id).answer) {
        score++;
      }
    });
    return score;
  }

  #findStudent(sid) {
    return this.#students.find((student) => student.id === sid) || null;
  }

  getAverageScore() {
    return (
      this.#students
        .map((x) => this.scoreStudentByStudentId(x.id))
        .reduce((a, b) => a + b) / this.#students.length
    );
  }
}
