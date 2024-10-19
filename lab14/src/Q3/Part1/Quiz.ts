import { Question } from "./Question";
import { Student } from "./Student";

export class Quiz {
  private _questions: Question[];
  private _students: Student[];

  constructor(questions: Question[], students: Student[]) {
    this._questions = questions;
    this._students = students;
  }

  get questions(): Question[] {
    return this._questions;
  }

  get students(): Student[] {
    return this._students;
  }

  private findStudent(sid: number): Student | null {
    return this._students.find((student) => student.id === sid) || null;
  }

  scoreStudentByStudentId(sid: number): number | null {
    let student: Student | null = this.findStudent(sid);
    if (student == null) {
      return null;
    }
    let score = 0;
    this.questions.forEach((qs: Question) => {
      let question = student.findQuestion(qs.id);
      if (question != null && qs.answer === question.answer) {
        score++;
      }
    });
    return score;
  }

  getAverageScore(): number {
    if (this.students.length > 0) {
      return (
        this.students
          .map((x) => this.scoreStudentByStudentId(x.id) ?? 0)
          .reduce((a, b) => a + b) / this.students.length
      );
    } else {
      return 0;
    }
  }
}
