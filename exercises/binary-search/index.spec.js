import { binarySearch } from '.';

describe('binary search algorithm', () => {
  let list = [1, 3, 4, 5, 8, 21];

  it('must do search position 1', () => {
    expect(binarySearch(list, 3)).toBe(1);
  });

  it('must do search position 4', () => {
    expect(binarySearch(list, 8)).toBe(4);
  });
});
