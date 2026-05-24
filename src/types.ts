export interface LibraryTerm {
  id: string;
  term: string;
  definition: string;
  category: "Duy vật biện chứng" | "Duy vật lịch sử" | "Lý luận nhận thức" | "Chân lý";
  vietnameseTerm: string;
  example: string;
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  options: {
    text: string;
    isCorrect: boolean;
    explanation: string;
    biasSelected?: string; // e.g. "Emotional Bias", "Dogmatism"
  }[];
  topic: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  points: number;
}

export interface UserProgress {
  completedQuizzes: string[]; // Quiz IDs
  score: number;
  badges: Badge[];
  learningTimeMinutes: number;
  correctAnswersCount: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  iconName: string; // lucide icon identifier
  unlockedAt?: string;
  requirement: string;
}
