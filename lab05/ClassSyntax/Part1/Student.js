export class Student {
  #fullName;
  #id;
  #answers;

  constructor(id, fullName) {
    this.#fullName = fullName;
    this.#id = id;
    this.#answers = [];
  }

  get fullName() {
    return this.#fullName;
  }

  set fullName(newName) {
    this.#fullName = newName;
  }

  get id() {
    return this.#id;
  }

  get answers() {
    return this.#answers;
  }

  addAnswer(question) {
    this.#answers.push(question);
  }

  findQuestion(qid) {
    return this.#answers.find((question) => question.id === qid) || null;
  }
}
