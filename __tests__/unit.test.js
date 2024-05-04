// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
describe('isPhoneNumber', () => {
  test('validates correct phone number format - true', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });
  test('validates correct phone number format with country code - true', () => {
    expect(isPhoneNumber('+1-123-456-7890')).toBe(true);
  });
  test('rejects invalid phone number format - false', () => {
    expect(isPhoneNumber('1234567890')).toBe(false);
  });
  test('rejects incorrect phone number with letters - false', () => {
    expect(isPhoneNumber('123-ABC-7890')).toBe(false);
  });
});

describe('isEmail', () => {
  test('validates correct email format - true', () => {
    expect(isEmail('email@example.com')).toBe(true);
  });
  test('validates correct email format - true', () => {
    expect(isEmail('hello@domain.co')).toBe(true);
  });
  test('rejects missing @ symbol - false', () => {
    expect(isEmail('emailexample.com')).toBe(false);
  });
  test('rejects missing domain - false', () => {
    expect(isEmail('email@')).toBe(false);
  });
});

describe('isStrongPassword', () => {
  test('validates password starting with a letter and has acceptable length - true', () => {
    expect(isStrongPassword('Password1')).toBe(true);
  });
  test('validates password with underscores and letters only - true', () => {
    expect(isStrongPassword('Pass_word123')).toBe(true);
  });
  test('rejects password starting with a digit - false', () => {
    expect(isStrongPassword('1stPassword')).toBe(false);
  });
  test('rejects password with special characters - false', () => {
    expect(isStrongPassword('Password!@#')).toBe(false);
  });
});


describe('isDate', () => {
  test('validates correct date format MM/DD/YYYY - true', () => {
    expect(isDate('12/01/1999')).toBe(true);
  });
  test('validates correct date format MM/DD/YYYY - true', () => {
    expect(isDate('04/25/2021')).toBe(true);
  });
  test('rejects incorrect date format - false', () => {
    expect(isDate('25-04-2021')).toBe(false);
  });
  test('rejects non-date string - false', () => {
    expect(isDate('April 25, 2021')).toBe(false);
  });
});

describe('isHexColor', () => {
  test('validates correct hex color 6 digits - true', () => {
    expect(isHexColor('#AABBCC')).toBe(true);
  });
  test('validates correct hex color 3 digits - true', () => {
    expect(isHexColor('#ABC')).toBe(true);
  });
  test('rejects incorrect hex color - false', () => {
    expect(isHexColor('#AABBCG')).toBe(false);  
  });
  test('rejects hex color too long - false', () => {
    expect(isHexColor('#AABBCCDD')).toBe(false);
  });
});
