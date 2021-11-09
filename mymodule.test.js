const mymodule = require('./mymodule.js');

test('testing sum(a, b)', () => {
  expect(mymodule.sum(1, 2)).toBe(3);
  expect(mymodule.sum(2, 2)).toBe(4);  
})