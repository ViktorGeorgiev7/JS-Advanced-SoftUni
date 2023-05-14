let numbers = [2,4,8,16];
let sum = 0;
numbers.forEach(x=> sum +=x);
console.log(sum)
const sumOfInverseValues = numbers.reduce((accumulator, currentValue) => accumulator + (1 / currentValue), 0);
console.log(sumOfInverseValues)
console.log(numbers.join(''))