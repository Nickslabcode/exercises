const areAllElementsUnique = iterable => {
  const set = new Set(iterable);
  return set.size === iterable.length;
};

// console.log(areAllElementsUnique('telerik')); // false
// console.log(areAllElementsUnique('agnerik')); // true

// works for arrays, too
// console.log(areAllElementsUnique([1, 2, 3, 4])); // true
// console.log(areAllElementsUnique([1, 2, 3, 3])); // false

const distinct = iterable => {
  return [...new Set(iterable)];
};

// console.log(distinct('abbbc').join(''));      // 'abc'
// console.log(distinct([1, 2, 3, 3, 4, 1]));  // [ 1, 2, 3, 4 ]

const union = (first, second) => new Set([...first, ...second]);

const union1 = union(new Set('abc'), new Set('bce'));
const union2 = union(new Set('abc'), new Set('def'));
const union3 = union(new Set([1, 5, 9]), new Set([3, 5, 8]));

// console.log(union1); // { 'a', 'b', 'c', 'e' }
// console.log(union2); // { 'a', 'b', 'c', 'd', 'e', 'f' }
// console.log(union3); // { 1, 5, 9, 3, 8 }

const intersection = (first, second) => {
  const set = new Set();

  for (const item of first) {
    if (second.has(item)) {
      set.add(item);
    }
  }
  return set;
};

const intersection1 = intersection(new Set('abc'), new Set('bce'));
const intersection2 = intersection(new Set('abc'), new Set('def'));
const intersection3 = intersection(new Set([1, 5, 9]), new Set([3, 5, 8]));

// console.log(intersection1); // { 'b', 'c' }
// console.log(intersection2); // {}
// console.log(intersection3); // { 5 }

const diff = (first, second) => {
  const arr1 = [...first].filter(item => !second.has(item));
  const arr2 = [...second].filter(item => !first.has(item));
  return [...arr1, ...arr2];
}

const s1 = new Set([1, 3, 5, 7, 9]);
const s2 = new Set([2, 3, 4, 6]);

console.log(diff(s1, s2));