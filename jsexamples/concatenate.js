const letters = ["a", "b", "c"];
const numbers = [1, 2, 3];
const values = [4, 5];

const alphaNumeric = letters.concat(numbers);
console.log(alphaNumeric);

const combined = letters.concat(numbers, values, 6);
console.log(combined);
// Output: ['a', 'b', 'c', 1, 2, 3, 4, 5, 6]
