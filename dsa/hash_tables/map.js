const map = new Map();
map.set('name', 'Nick');
map.set('age', 29);
map.set('age', 30);
console.log(map.has('name'));
console.log(map.keys());
console.log(map.get('age'));
console.log(map.entries());
console.log(map.delete('name'));
console.log(map.entries());
map.clear();


const countOfOccurrences = array => {
  const map = new Map();
  for (const item of array) {
    const count = map.get(item) || 0;
    map.set(item, count + 1);
  }
  return map;
}

const occurrences = ['js', 'c++', 'js', 'c', 'java', 'c'];
// console.log(countOfOccurrences(occurrences))

const groupBy = (
  data,
  keySelector,
  valueSelector = (x => x)
) => {
  const map = new Map();

  for (const obj of data) {
    const key = keySelector(obj);
    const value = valueSelector(obj);

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(value);
  }

  return map;
}

const cities = [
  { country: 'BG', city: 'Plovdiv'},
  { country: 'BG', city: 'Sofia'},
  { country: 'UK', city: 'London'},
  { country: 'US', city: 'Chicago'},
  { country: 'UK', city: 'Manchester'},
]

const groupByCountry = groupBy(cities, c => c.country);
const groupByCountry2 = groupBy(cities, c => c.country, c => c.city);
// console.log(groupByCountry);
console.log(groupByCountry2);