
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface ClinicalCase {
  patient: string;
  findings: string;
  question: string;
  resolution: string;
}

export interface Module {
  id: number;
  title: string;
  subtitle: string;
  colorClass: string;
  textColor: string;
  content: string;
  summary: string;
  clinicalCase: ClinicalCase;
  quiz: Question[];
}

export interface UserProgress {
  currentModuleId: number;
  completedModules: number[];
  quizScores: Record<number, number>;
}
