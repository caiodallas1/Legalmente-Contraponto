import { Question } from '../../types';
import { publicLawQuestions } from './publicLaw';
import { criminalLawQuestions } from './criminalLaw';
import { privateLawQuestions } from './privateLaw';
import { theoryPhilosophyQuestions } from './theoryPhilosophy';
import { politicsHumanRightsQuestions } from './politicsHumanRights';
import { contemporaryTechQuestions } from './contemporaryTech';

export const ALL_QUESTIONS: Question[] = [
  ...publicLawQuestions,
  ...criminalLawQuestions,
  ...privateLawQuestions,
  ...theoryPhilosophyQuestions,
  ...politicsHumanRightsQuestions,
  ...contemporaryTechQuestions,
];

export const TOTAL_QUESTIONS_COUNT = ALL_QUESTIONS.length;

// Map for quick ID lookup
export const QUESTIONS_BY_ID = new Map<string, Question>(
  ALL_QUESTIONS.map((q) => [q.id, q])
);
