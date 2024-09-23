let input = [
  '2',
];

let print = this.print || console.log
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
// Use gets() to receive one line of input (the input line is always a string)
// Use "print" instead of "console.log" to print the result

const names = gets().split(' ').map(name => name.split('').sort().join(''));



print(names.sort().join(' '))




