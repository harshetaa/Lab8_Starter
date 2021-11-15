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


  test('is this valid: hcavale@ucsd.edu', () => {
    expect(functions.isEmail('hcavale@ucsd.edu')).toBe(true);
  });

  test('is this valid: harshetacavale26@gmail.com', () => {
    expect(functions.isEmail('harshetacavale26@gmail.com')).toBe(true);
  });

  test('is this valid: @', () => {
    expect(functions.isEmail('@')).toBe(false);
  });

  test('is this valid: hinothanks@', () => {
    expect(functions.isEmail('hinothanks@')).toBe(false);
  });


  test('is this valid: password123', () => {
    expect(functions.isStrongPassword('password123')).toBe(true);
  });

  test('is this valid: StrongPass49', () => {
    expect(functions.isStrongPassword('StrongPass49')).toBe(true);
  });

  test('is this valid: cat', () => {
    expect(functions.isStrongPassword('cat')).toBe(false);
  });

  test('is this valid: passwordpasswordpasswordpassword', () => {
    expect(functions.isEmail('passwordpasswordpasswordpassword')).toBe(false);
  });


  test('is this valid: 10/26/2001', () => {
    expect(functions.isDate('10/26/2001')).toBe(true);
  });

  test('is this valid: 12/12/2003', () => {
    expect(functions.isDate('12/12/2003')).toBe(true);
  });

  test('is this valid: 05/01/71', () => {
    expect(functions.isDate('05/01/71')).toBe(false);
  });

  test('is this valid: 002/02/69', () => {
    expect(functions.isEmail('002/02/69')).toBe(false);
  });

  test('is this valid: 000000', () => {
    expect(functions.isHexColor('000000')).toBe(true);
  });

  test('is this valid: ff8000', () => {
    expect(functions.isHexColor('ff8000')).toBe(true);
  });

  test('is this valid: 0501', () => {
    expect(functions.isHexColor('0501')).toBe(false);
  });

  test('is this valid: 0020269', () => {
    expect(functions.isHexColor('0020269')).toBe(false);
  });
  