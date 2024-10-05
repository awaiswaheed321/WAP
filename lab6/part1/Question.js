export function Question(id, answer) {
  this.id = id;
  this.answer = answer;
}

Question.prototype.checkAnswer = function (ans) {
  return this.answer === ans;
};
