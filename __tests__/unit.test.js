// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');
// TODO - Part 2

test('is this valid: (714)822-1855', () => {
    expect(functions.isPhoneNumber('(714)822-1855')).toBe(true);
  });

  test('is this valid: (714)822-1856', () => {
    expect(functions.isPhoneNumber('(714)822-1856')).toBe(true);
  });

  test('is this valid: 12345678', () => {
    expect(functions.isPhoneNumber('12345678')).toBe(false);
  });

  test('is this valid: 26122612', () => {
    expect(functions.isPhoneNumber('26122612')).toBe(false);
  });