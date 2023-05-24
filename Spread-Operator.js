const number1 = [1, 2, 3];
const number2 = [4, 5, 6];
const numbers = [...number1, ...number2];

console.log(numbers);




const allnumbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = allnumbers;

console.log(one)
console.log(two)
console.log(rest);