let input = ['8', '7', '3', '2', '3', '5', '2', '2', '4'];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

const limit = +gets();
const numbers = [];

let i = 0;

while (i < limit) {
  let currentDigit = +gets();
  if (Number.isNaN(currentDigit)) break;
  numbers.push(currentDigit);
}

let currentIncreasingSequence = 1;
let longestIncreasingSequence = 1;

for (let i = 0; i <= numbers.length; i++) {
  let currentDigit = numbers[i];
  let nextDigit = numbers[i + 1];
  if (nextDigit > currentDigit) {
    currentIncreasingSequence++;
  } else {
    if (currentIncreasingSequence > longestIncreasingSequence) {
      longestIncreasingSequence = currentIncreasingSequence;
    }

    currentIncreasingSequence = 1;
  }
}

print(longestIncreasingSequence);
