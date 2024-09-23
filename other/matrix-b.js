let input = ['3'];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

// 1 6 7
// 2 5 8
// 3 4 9

const num = +gets();

const matrix = Array.from({ length: num }, () =>
  Array.from({ length: num }, () => null)
);

let direction = 'down'; // up or down
let row = 0;
let col = 0;

for (let i = 0; i < Math.pow(num, 2); i++) {
  matrix[row][col] = i + 1;

  if (direction === 'down') {
    if (row + 1 >= matrix.length) {
      direction = 'up';
      col++;
    } else {
      row++;
    }
  } else {
    if (row - 1 < 0) {
      direction = 'down';
      col++;
    } else {
      row--;
    }
  }
}

print(matrix.map(row => row.join(' ')).join('\n'))
