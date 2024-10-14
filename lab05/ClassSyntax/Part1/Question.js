export class Question {
  #id;
  #answer;
  constructor(id, answer) {
    this.#id = id;
    this.#answer = answer;
  }

  get id() {
    return this.#id;
  }

  get answer() {
    return this.#answer;
  }

  checkAnswer(ans) {
    return this.#answer === ans;
  }
}
