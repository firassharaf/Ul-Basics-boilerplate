
const { subNumbers, multNumbers, divNumbers } = require('../index');


test('It should substract the second number from the first one', () => {
    expect(subNumbers(2, 2)).toBe(0);
    expect(subNumbers(6, 4)).toBe(2);
    expect(subNumbers(4, 6)).toBe(-2);
    expect(subNumbers(4, 6)).not.toBe(2);
});

test('It should multiply the two numbers together', () => {
    expect(multNumbers(2, 2)).toBe(4);
    expect(multNumbers(3, 2)).toBe(6);
    expect(multNumbers(2, 3)).toBe(6);
    expect(multNumbers(0, 1)).toBe(0);
});

test('It should divide the first number with the second one', () => {
    expect(divNumbers(2, 2)).toBe(1);
    expect(divNumbers(3, 4)).toBeCloseTo(0.75);
    expect(divNumbers(4, 3)).toBeCloseTo(1.33);
    expect(divNumbers(4, 3)).not.toBe(1.3);
    expect(divNumbers(1, 0)).toBe(Infinity);
});