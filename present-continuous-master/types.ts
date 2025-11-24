export interface Question {
  id: number;
  question: string; // The main question text (including LaTeX like formatting if needed)
  options: string[]; // Array of 4 options
  correctIndex: number; // 0-3
  explanation?: string; // Optional explanation
}

export interface Section {
  id: string;
  title: string;
  questions: Question[];
}

export type UserAnswers = Record<number, number>; // QuestionID -> SelectedOptionIndex