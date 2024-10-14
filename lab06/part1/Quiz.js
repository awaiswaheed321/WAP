export function Quiz(questions, students) {
  this.questions = new Map();
  questions.forEach((element) => {
    this.questions.set(element.id, element.answer);
  });
  this.students = students;
}

Quiz.prototype.scoreStudentByStudentId = function (sid) {
  let student = this.findStudent(sid);
  if (student == null) {
    return null;
  }
  let score = 0;
  this.questions.forEach((ans, id) => {
    let question = student.findQuestion(id);
    if (question && ans === question.answer) {
      score++;
    }
  });
  return score;
};

Quiz.prototype.findStudent = function (sid) {
  return this.students.find((student) => student.id === sid) || null;
};

Quiz.prototype.getAverageScore = function () {
  return (
    this.students
      .map((x) => this.scoreStudentByStudentId(x.id) || 0)
      .reduce((a, b) => a + b, 0) / this.students.length
  );
};
