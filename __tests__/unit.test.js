// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// Check for valid phone number
test('Checks for valid phone number', () => {
    const phoneNum = '123-456-7890'
    expect(functions.isPhoneNumber(phoneNum)).toBe(true);
});

test('Checks for valid phone number #2', () => {
    const phoneNum = '332-654-9982'
    expect(functions.isPhoneNumber(phoneNum)).toBe(true);
});

test('Checks for invalid phone number', () => {
    const phoneNum = '12334242432-str-7890'
    expect(functions.isPhoneNumber(phoneNum)).toBe(false);
});

test('Checks for invalid phone number #2', () => {
    const phoneNum = '1234567890'
    expect(functions.isPhoneNumber(phoneNum)).toBe(false);
});

// Check for valid email
test('Checks for valid email', () => {
    const email = 'amiteshsharma@gmail.com'
    expect(functions.isEmail(email)).toBe(true);
});

test('Checks for valid email #2', () => {
    const email = 'cseonehundred@yahoo.com'
    expect(functions.isEmail(email)).toBe(true);
});

test('Checks for nonvalid email', () => {
    const email = 'invalid email'
    expect(functions.isEmail(email)).toBe(false);
});

test('Checks for nonvalid email  #2', () => {
    const email = 'this_is_not_a_email.com'
    expect(functions.isEmail(email)).toBe(false);
});

// Check for strong password
test('Checks for strong password', () => {
    const password = 'amitesh_sharma'
    expect(functions.isStrongPassword(password)).toBe(true);
});

test('Checks for strong password #2', () => {
    const password = 'CSE_110'
    expect(functions.isStrongPassword(password)).toBe(true);
});

test('Checks for weak password', () => {
    const password = 'in*6778(^#$$%^#'
    expect(functions.isStrongPassword(password)).toBe(false);
});

test('Checks for weak password  #2', () => {
    const password = '4'
    expect(functions.isStrongPassword(password)).toBe(false);
});

// Check for valid date
test('Checks for valid date', () => {
    const date = '04/12/2001'
    expect(functions.isDate(date)).toBe(true);
});

test('Checks for valid date #2', () => {
    const date = '1/1/2021'
    expect(functions.isDate(date)).toBe(true);
});

test('Checks for invalid date', () => {
    const date = '90/12/20'
    expect(functions.isDate(date)).toBe(false);
});

test('Checks for invalid date #2', () => {
    const date = '99/999/9999'
    expect(functions.isDate(date)).toBe(false);
});

// Check for hex color
test('Checks for valid hex color', () => {
    const color = 'FFF'
    expect(functions.isHexColor(color)).toBe(true);
});

test('Checks for valid hex color #2', () => {
    const color = '0976BB'
    expect(functions.isHexColor(color)).toBe(true);
});

test('Checks for invalid hex color', () => {
    const color = '98'
    expect(functions.isHexColor(color)).toBe(false);
});

test('Checks for invalid hex color #2', () => {
    const color = '9999'
    expect(functions.isHexColor(color)).toBe(false);
});