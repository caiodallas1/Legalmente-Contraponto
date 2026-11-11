import test from 'node:test';
import assert from 'node:assert/strict';
import { formatTime, calculateProgressPercentage, calculateRemainingFromTimestamp } from './timer';

test('formatTime correctly formats seconds to MM:SS', () => {
  assert.equal(formatTime(600), '10:00');
  assert.equal(formatTime(120), '02:00');
  assert.equal(formatTime(9), '00:09');
  assert.equal(formatTime(0), '00:00');
  assert.equal(formatTime(-10), '00:00');
  assert.equal(formatTime(75), '01:15');
});

test('calculateProgressPercentage computes correct values and clamps', () => {
  assert.equal(calculateProgressPercentage(600, 600), 0);
  assert.equal(calculateProgressPercentage(300, 600), 50);
  assert.equal(calculateProgressPercentage(0, 600), 100);
  assert.equal(calculateProgressPercentage(-5, 600), 100);
  assert.equal(calculateProgressPercentage(700, 600), 0);
});

test('calculateRemainingFromTimestamp calculates remaining time correctly', () => {
  // When paused (startTimestamp is null)
  assert.equal(calculateRemainingFromTimestamp(600, null, 10000), 590);
  assert.equal(calculateRemainingFromTimestamp(600, null, 600000), 0);
});
