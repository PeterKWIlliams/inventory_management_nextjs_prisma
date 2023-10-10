const items = [1, 2, 3, 2, 2, 4, 5, 5, 2, 6, 7, 8, 2, 9, 9, 9];

const mostFrequent = items.reduce((accumulator, currentValue) => {
  if (!accumulator[currentValue]) {
    accumulator[currentValue] = 1;
  } else {
    accumulator[currentValue]++;
  }
  return accumulator;
}, {});

const result = Object.entries(mostFrequent).reduce(
  (mostFrequentItem, [item, count]) =>
    count > mostFrequentItem[1] ? [item, count] : mostFrequentItem,
  ["", 0]
);

console.log(`Most frequent item: ${result[0]}, Count: ${result[1]}`);
