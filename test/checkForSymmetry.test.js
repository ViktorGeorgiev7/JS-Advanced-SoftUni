const { it } = require('node:test');
const symmetry = require('../07.Unit Testing and Error Handling/Lab/05.Check for Symmetry');
const assert = require('assert').strict;
it('Should return false if input isnt of the correct type',function(){
assert.equal(symmetry(''),false);
});

it('Should return true if the input array is symmetric',function(){
assert.equal(symmetry([1,2,1]),true);
});

it('Should return false if the array is asymmetric',function(){
    assert.equal(symmetry([2,1]),false);
});

