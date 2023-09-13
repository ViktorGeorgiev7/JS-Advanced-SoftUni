const sum = require('../07.Unit Testing and Error Handling/Lab/04.Sum of Numbers');
const assert = require('assert').strict;
console.log(sum);
it('Should calculate the sum of all elements in the array',()=>{
    let actualSum = sum([5,3,2]);
    assert.equal(actualSum,10);
});
