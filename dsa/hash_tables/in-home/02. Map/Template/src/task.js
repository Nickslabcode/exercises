export const countOccurrences = array => {
  const map = new Map();

  for (const item of array) {
    const count = map.has(item) || 0;
    map.set(item, count + 1);
  }

  return map;
};

export const groupBy = (data, keySelector, valueSelector = x => x) => {
  const map = new Map();

  data.forEach(obj => {
    const key = keySelector(obj);
    const value = valueSelector(obj);

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(value);
  });

  return map;
};
