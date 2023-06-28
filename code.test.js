const {capitalize, reverseString, Calculator, shift} = require('./code');

// Capitalize: Take a string and return it with first letter capitalized hello => Hello
test('Return a string capitalized', () => {
    expect(capitalize('hello')).toMatch(/Hello/);
})

// Reverse string: Take a string and reverse it "Justin" -> "nitsuJ";
test('Reverse a string', () => {
    expect(reverseString('Justin')).toMatch(/nitsuJ/);
})

// Calculator: Functioning calculator object that adds, subtracts, multiplies, and divides
test('Calculator', () => {
    expect(Calculator.add(5,3)).toBe(8);
    expect(Calculator.subtract(10,4)).toBe(6);
    expect(Calculator.multiply(6,6)).toBe(36);
    expect(Calculator.divide(72,24)).toBe(3);
})

// Caesar Cipher: Shifts each character by a given amount | "abcdef" => bcdefg shifted 1
test('Shift characters by set amount', () => {
    expect(shift('abc', 1)).toMatch(/bcd/);
    expect(shift('justin', 3)).toMatch(/mxvwlq/);
    expect(shift('xyz', 5)).toMatch(/cde/);
    expect(shift('justin', 10)).toMatch(/tecdsx/);
})