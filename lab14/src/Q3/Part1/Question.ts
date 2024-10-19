export class Question {
  private _id: number;
  private _answer: string;

  constructor(id: number, answer: string) {
    this._id = id;
    this._answer = answer;
  }

  get id(): number {
    return this._id;
  }

  get answer(): string {
    return this._answer;
  }

  checkAnswer(ans: string): boolean {
    return this._answer === ans;
  }
}
