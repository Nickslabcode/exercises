let input = ['4'];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);
// Use gets() to receive one line of input (the input line is always a string)
// Use "print" instead of "console.log" to print the result

const num = +gets();

const matrix = Array.from({ length: num }, (_, rowIndex) =>
  Array.from({ length: num }, (_, colIndex) => rowIndex + colIndex * num + 1)
)
  .map(row => row.join(' '))
  .join('\n');

print(matrix);
