import { Question } from "./Question";

export class Student {
  private _id: number;
  private _fullName: string;
  private _answers: Question[] = [];

  constructor(id: number, fullName: string) {
    this._id = id;
    this._fullName = fullName;
  }

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName) {
    this._fullName = newName;
  }

  get id(): number {
    return this._id;
  }

  get answers(): Question[] {
    return this._answers;
  }

  addAnswer(question: Question): void {
    this._answers.push(question);
  }

  findQuestion(qid: number): Question | null {
    return this._answers.find((question) => question.id === qid) || null;
  }
}
