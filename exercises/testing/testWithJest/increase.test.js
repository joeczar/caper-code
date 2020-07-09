// increase.test.js

const { increase } = require('./increase');

test('Passing NaN to increase will produce the string "ERROR!"', () => {
    const result = increase(NaN);
    expect(result).toBe('ERROR!');
});

test('Passing 0 to my function should produce the string "ERROR!"', () => {
    expect(increase(0)).toBe('ERROR!');
})

test('Passing 0 to my function should produce the string "ERROR!"', () => {
    expect(increase(0)).toBe('ERROR!');
})

test('Passing 2 to my function should produce the number 2000000', () => {
    expect(increase(2)).toBe(2000000);
});

test('Passing a number higher than 1000000 to my function should produce the same number', () => {
    expect(increase(3000000)).toBe(3000000);
});