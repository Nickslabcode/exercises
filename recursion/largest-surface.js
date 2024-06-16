let input = [
  '5 6',
  '1 3 2 2 2 4',
  '3 3 3 2 4 4',
  '4 3 1 2 3 3',
  '4 3 1 3 3 1',
  '4 3 3 3 1 1',
];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

const [rows, cols] = gets().split(' ').map(Number);

const matrix = Array.from({ length: rows }, () =>
  gets().split(' ').map(Number)
);

const traverse = (matrix, row = 0, col = 0, counter = new Map()) => {
  const currentValue = matrix[row][col];
  const dfs = (row, col) => {
    if (row < 0 || row >= rows || col < 0 || col >= cols) return;
    if (matrix[row][col] === null || matrix[row][col] !== currentValue) return;

    const count = counter.get(matrix[row][col]) || 0;
    counter.set(matrix[row][col], count + 1);
    matrix[row][col] = null;
    dfs(row, col + 1);
    dfs(row + 1, col);
    dfs(row, col - 1);
    dfs(row - 1, col);
  };

  dfs(row, col);
  return counter;
};

let maxCount = 0;
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    const currentCount = traverse(matrix, i, j).values().next().value;
    if (currentCount > maxCount) {
      maxCount = currentCount;
    }
  }
}

print(maxCount);
