// https://leetcode.com/problems/snail-traversal/solutions/5803275/linear-time-complexity-snail-traversal/

/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
  if (rowsCount * colsCount > this.length) return [];

  const matrix = Array.from({ length: rowsCount }, () =>
    Array.from({ length: colsCount }, () => null)
  );

  let row = 0;
  let col = 0;
  let isDirectionDown = true;

  for (const element of this) {
    matrix[row][col] = element;
    if (isDirectionDown) {
      if (row + 1 >= rowsCount) {
        col++;
        isDirectionDown = false;
      } else {
        row++;
      }
    } else {
      if (row - 1 < 0) {
        col++;
        isDirectionDown = true;
      } else {
        row--;
      }
    }
  }

  return matrix;
};

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */

const arr = [1, 2, 3, 4];
const arr2 = [
  19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15,
];

const rowsCount = 5;
const colsCount = 4;
const res = arr.snail(rowsCount, colsCount)
const res2 = arr2.snail(rowsCount, colsCount);
console.table(res2);
