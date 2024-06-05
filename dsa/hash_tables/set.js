//1. check if all elements are unique
const checkUniques = iterable => {
  const set = new Set(iterable);
  return set.size === iterable.length;
}
const arrOfUniques = [1, 2, 3, 4, 5, 6];
const arrOfNonUniques = [1, 2, 3, 4, 5, 6, 6, 6];
console.log(checkUniques(arrOfUniques)); // true
console.log(checkUniques(arrOfNonUniques)); // false

//2. removing duplicates
const removeDuplicates = iterable => [...new Set(iterable)];
console.log(removeDuplicates(arrOfNonUniques));
console.log(arrOfNonUniques);

//3. Union

//4. Intersection
//5. Difference
//6. Symmetric difference

