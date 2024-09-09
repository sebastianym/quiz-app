export interface Question {
  id: number;
  question: string;
  answers: string[];
  indexCorrectAnswer: string;
  state?: number;
  userResponse?: number;
}
