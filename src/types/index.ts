export type Category =
  | 'Direito Constitucional'
  | 'Direito Penal'
  | 'Processo Penal'
  | 'Direito Civil'
  | 'Processo Civil'
  | 'Direito Administrativo'
  | 'Direito Tributário'
  | 'Direito do Trabalho'
  | 'Direitos Humanos'
  | 'Direito Internacional'
  | 'Teoria do Estado'
  | 'Filosofia do Direito'
  | 'Sociologia Jurídica'
  | 'Ciência Política'
  | 'Democracia e Instituições'
  | 'Economia e Direito'
  | 'História do Direito'
  | 'Tecnologia e Direito'
  | 'Criminologia'
  | 'Direito Eleitoral'
  | 'Questões Contemporâneas';

export type Complexity = 'Intermediário' | 'Avançado';

export interface Question {
  id: string;
  category: Category;
  question: string;
  complexity: Complexity;
  keywords: string[];
  context: string; // O conflito central
  investigationPaths: [string, string, string]; // 3 caminhos de investigação
  counterpoint: string; // O outro lado / perspectiva contraposta
}

export type ActiveView = 'home' | 'directory' | 'saved' | 'about';

export type TimerPhase = 'none' | 'research' | 'argumentation' | 'completed';

export interface TimerSession {
  phase: TimerPhase;
  question: Question | null;
  totalSeconds: number;
  remainingSeconds: number;
  isRunning: boolean;
  isFinished: boolean;
  startTimestamp: number | null;
  accumulatedMs: number;
}
