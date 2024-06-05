//1. check if all elements are unique
const checkUniques = iterable => {
  const set = new Set(iterable);
  return set.size === iterable.length;
};
const arrOfUniques = [1, 2, 3, 4, 5, 6];
const arrOfNonUniques = [1, 2, 3, 4, 5, 6, 6, 6];
console.log(checkUniques(arrOfUniques)); // true
console.log(checkUniques(arrOfNonUniques)); // false

//2. removing duplicates
const removeDuplicates = iterable => new Set(iterable);
console.log(removeDuplicates(arrOfNonUniques));
console.log(arrOfNonUniques);

//3. Union
const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);

const union = (first, second) => new Set([...first, ...second]);
console.log(union(set1, set2)); // { 1, 2, 3, 4, 5, 6 }

//4. Intersection

const intersection = (first, second) => {
  const set = new Set();
  for (const item of second) {
    if (first.has(item)) set.add(item);
  }
  return set;
};
console.log(intersection(set1, set2)); // { 2, 3 }

//5. Symmetric difference
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const symmetricDiff = (first, second) => {
  const set1 = new Set(first);
  const set2 = new Set(second);

  const diff1 = Array.from(set1).filter(item => !set2.has(item));
  const diff2 = Array.from(set2).filter(item => !set1.has(item));
  return [...diff1, ...diff2];
};

console.log(symmetricDiff(array1, array2)); // [1, 2, 5, 6]
