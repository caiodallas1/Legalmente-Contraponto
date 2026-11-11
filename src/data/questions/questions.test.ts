import test from 'node:test';
import assert from 'node:assert/strict';
import { ALL_QUESTIONS } from './index';
import { ALL_CATEGORIES } from '../categories';

test('database has at least 300 questions', () => {
  assert.ok(
    ALL_QUESTIONS.length >= 300,
    `Expected at least 300 questions, found ${ALL_QUESTIONS.length}`
  );
});

test('all question IDs are unique', () => {
  const ids = new Set<string>();
  for (const q of ALL_QUESTIONS) {
    assert.ok(!ids.has(q.id), `Duplicate question ID found: ${q.id}`);
    ids.add(q.id);
  }
});

test('all questions have required fields populated', () => {
  const validCategories = new Set(ALL_CATEGORIES);

  for (const q of ALL_QUESTIONS) {
    assert.ok(validCategories.has(q.category), `Invalid category: ${q.category} on ${q.id}`);
    assert.ok(q.question && q.question.trim().length > 10, `Empty or short question: ${q.id}`);
    assert.ok(q.context && q.context.trim().length > 15, `Empty or short context: ${q.id}`);
    assert.ok(q.counterpoint && q.counterpoint.trim().length > 10, `Empty counterpoint: ${q.id}`);
    assert.equal(q.investigationPaths.length, 3, `Expected 3 investigation paths on ${q.id}`);
    assert.ok(q.keywords && q.keywords.length >= 2, `Expected at least 2 keywords on ${q.id}`);
    assert.ok(['Intermediário', 'Avançado'].includes(q.complexity), `Invalid complexity on ${q.id}`);
  }
});
