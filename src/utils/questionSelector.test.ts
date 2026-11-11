import test from 'node:test';
import assert from 'node:assert/strict';
import { filterQuestions, selectRandomQuestion } from './questionSelector';
import { Question } from '../types';

const mockQuestions: Question[] = [
  {
    id: 'CONST-01',
    category: 'Direito Constitucional',
    question: 'Uma democracia pode destruir a si mesma utilizando mecanismos democráticos?',
    complexity: 'Avançado',
    keywords: ['democracia', 'soberania', 'cláusulas pétreas'],
    context: 'Tensões entre o poder constituinte derivado e a sobrevivência do pacto democrático.',
    investigationPaths: ['Democracia militante de Loewenstein', 'Limites materiais de reforma', 'A ascensão de autocracias pela via eleitoral'],
    counterpoint: 'Se o Estado limita decisões da maioria para proteger a democracia, quem legitima os guardiões?'
  },
  {
    id: 'PENAL-01',
    category: 'Direito Penal',
    question: 'A intervenção penal simbólica corrompe a legitimidade do Direito Penal?',
    complexity: 'Intermediário',
    keywords: ['direito penal simbólico', 'populismo penal', 'ultima ratio'],
    context: 'A expansão punitiva para atender anseios imediatos da opinião pública.',
    investigationPaths: ['Princípio da intervenção mínima', 'Doutrina de Hassemer', 'Eficácia preventiva geral versus retórica legislativa'],
    counterpoint: 'Em sociedades hipercomplexas e violentas, a legislação penal simbólica não cumpriria uma função de coesão social insubstituível?'
  },
  {
    id: 'PROC-01',
    category: 'Processo Penal',
    question: 'A busca pela verdade real justifica a flexibilização das garantias processuais?',
    complexity: 'Avançado',
    keywords: ['verdade real', 'garantismo', 'provas ilícitas'],
    context: 'Conflito entre efetividade da condenação e respeito incondicional ao devido processo legal.',
    investigationPaths: ['Garantismo penal de Luigi Ferrajoli', 'Teoria dos frutos da árvore envenenada', 'Sistema acusatório versus inquisitório'],
    counterpoint: 'Não seria contraditório anular um processo com prova material irrefutável de delito hediondo em nome de mera formalidade?'
  }
];

test('filterQuestions filters by category', () => {
  const result = filterQuestions(mockQuestions, ['Direito Constitucional']);
  assert.equal(result.length, 1);
  assert.equal(result[0].id, 'CONST-01');
});

test('filterQuestions filters by multiple categories', () => {
  const result = filterQuestions(mockQuestions, ['Direito Constitucional', 'Direito Penal']);
  assert.equal(result.length, 2);
});

test('filterQuestions filters by complexity', () => {
  const adv = filterQuestions(mockQuestions, [], 'Avançado');
  assert.equal(adv.length, 2);

  const inter = filterQuestions(mockQuestions, [], 'Intermediário');
  assert.equal(inter.length, 1);
  assert.equal(inter[0].id, 'PENAL-01');
});

test('filterQuestions filters by search query', () => {
  const searchByKeyword = filterQuestions(mockQuestions, [], 'Todas', 'Ferrajoli');
  assert.equal(searchByKeyword.length, 1);
  assert.equal(searchByKeyword[0].id, 'PROC-01');

  const searchByText = filterQuestions(mockQuestions, [], 'Todas', 'democracia');
  assert.equal(searchByText.length, 1);
});

test('selectRandomQuestion prioritizes unvisited questions', () => {
  // If CONST-01 and PENAL-01 are visited, only PROC-01 should be chosen
  const picked = selectRandomQuestion(mockQuestions, ['CONST-01', 'PENAL-01']);
  assert.ok(picked);
  assert.equal(picked?.id, 'PROC-01');
});

test('selectRandomQuestion falls back to full pool if all have been visited', () => {
  const picked = selectRandomQuestion(mockQuestions, ['CONST-01', 'PENAL-01', 'PROC-01']);
  assert.ok(picked);
  assert.ok(['CONST-01', 'PENAL-01', 'PROC-01'].includes(picked!.id));
});
