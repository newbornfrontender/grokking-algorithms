const binarySearch = require('./index');

const list = [1, 3, 4, 5, 8, 21];

test('searched position must be 1', () => {
  expect.hasAssertions();
  expect(binarySearch(list, 3)).toBe(1);
});

test('searched position must be 4', () => {
  expect.hasAssertions();
  expect(binarySearch(list, 8)).toBe(4);
});
