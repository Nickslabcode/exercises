// Implement a function that takes a string as input and returns the most frequent
// character in that string. If there is a tie, return the character that appears first.

function mostFrequentChar(str) {
  const map = new Map();
  for (const element of str) {
    map.has(element)
      ? map.set(element, map.get(element) + 1)
      : map.set(element, 1);
  }
  let charFrequency = 0;
  let char = '';
  for (const [key, value] of map.entries()) {
    if (value > charFrequency) {
      charFrequency = value;
      char = key;
    }
  }

  return char;
}

// Example Usage:
console.log(mostFrequentChar('javascript')); // Output: "a"
console.log(mostFrequentChar('react')); // Output: "r"
console.log(mostFrequentChar('developer')); // Output: "e"
