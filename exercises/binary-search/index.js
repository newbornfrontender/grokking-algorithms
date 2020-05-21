export const binarySearch = (list, item) => {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];

    if (guess === item) return mid;
    if (guess > item) high = mid - 1;
    if (guess < item) low = mid + 1;
  }

  return -1;
};
