export function Student(id, fullName) {
  this.fullName = fullName;
  this.id = id;
  this.answers = [];
}

Student.prototype.addAnswer = function (question) {
  this.answers.push(question);
};

Student.prototype.findQuestion = function (qid) {
  return this.answers.find((question) => question.id === qid) || null;
};
