let input = ['abbCCCcddBBBxxxx'];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

const string = gets();

let start = 0;
let end = 1;
let currentSubstring = '';
let longestSubstring = '';

for (let i = 1; i <= string.length; i++) {
  end = i;
  if (string[start] !== string[end]) {
    currentSubstring = string.substring(start, end);
    start = end;
  }

  if (currentSubstring.length > longestSubstring.length) {
    longestSubstring = currentSubstring;
    currentSubstring = '';
  }
}

print(longestSubstring);
