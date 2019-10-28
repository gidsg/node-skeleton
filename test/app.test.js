const app = require('../app/app')

test('adds 1 + 2 to equal 3', () => {
  expect(app.sum(1, 2)).toBe(3);
});

test('returns hello', () => {
expect(app.returnHello()).toBe('hello');
})