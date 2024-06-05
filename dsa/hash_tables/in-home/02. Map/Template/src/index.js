import { countOccurrences, groupBy } from './task.js';

const occurrences = countOccurrences(['js', 'c#', 'js', 'c#', 'c++']);
// console.log(occurrences);

const cities = [
  { country: 'BG', city: 'Sofia' },
  { country: 'UK', city: 'London' },
  { country: 'UK', city: 'Manchester' },
  { country: 'BG', city: 'Plovdiv' },
  { country: 'US', city: 'Chicago' },
];

// just create groups of objects:
const byCountry = groupBy(cities, c => c.country);

// create groups with specified values:
const byCountry2 = groupBy(
  cities,
  c => c.country,
  c => c.city
);

console.log(byCountry)
console.log(byCountry2)
