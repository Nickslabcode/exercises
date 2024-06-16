// 1. sum numbers to n

const sum = number => {
  if (!number) return 0;

  return number + sum(number - 1);
};

const sumResult = sum(5);
// console.log(sumResult);

// 2. reverse String

const reverse = string => {
  if (!string.length || string.length === 1) return string;

  const firstLetter = string[0];
  const rest = string.slice(1);

  return rest + reverse(firstLetter); // look up
  // return reverse(firstLetter) + rest; // look down
};

const reverseStringResult = reverse('Hello');
// console.log(reverseStringResult);

// 3. Find all possible paths in a grid from top-left corner to bottom-right

const gridPaths = (height, width) => {
  if (height === 1 || width === 1) return 1;

  return gridPaths(height - 1, width) + gridPaths(height, width - 1);
};

const gridPathsResult = gridPaths(3, 4);
// console.log(gridPathsResult);

const partitions = (n, m) => {
  if (m === 0 || n < 0) return 0;
  if (n === 0) return 1;

  return partitions(n - m, m) + partitions(n, m - 1);
};

const partitionsResult = partitions(5, 2);
// console.log(partitionsResult);

// 4. Fibonacci slow recursion

const fibSlow = n => {
  if (n === 1 || n === 2) return 1;
  const sum = fibSlow(n - 1) + fibSlow(n - 2);
  console.log(sum);
  return sum;
}

// fibSlow(20);

// 5. Fibonacci fast recursion

const fibFast = (number, memo = new Map()) => {
  if (!memo.get(number)) {
    if (number === 1 || number === 2) {
      memo.set(number, 1);
    } else {
      memo.set(number, fibFast(number - 1, memo) + fibFast(number - 2, memo));
    }
  }
  console.log(memo.get(number));
  return memo.get(number);
}

fibFast(8);
