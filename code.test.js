const capitalize = require('./code');

// Capitalize: Take a string and return it with first letter capitalized hello => Hello
test('Return a string capitalized', () => {
    expect(capitalize('hello')).toMatch(/Hello/);
})
