const { it } = require('mocha');
const lookupChar = require('../07.Unit Testing and Error Handling/More Exercises/03.Char Lookup');
const expect = require('chai').expect;
console.log(lookupChar);
it('Should return undefined when string argument is not of type string',function(){
expect(lookupChar(5,5)).to.equal(undefined);
});
it('Should return undefined when index argument is not of type number',function(){
    expect(lookupChar('a','5')).to.equal(undefined);
});
it('Should return incorrect index when index argument is less than the strings length',function(){
    expect(lookupChar('a',5)).to.equal('Incorrect index');
});
it('Should return incorrect index when index is less than 0',function(){
    expect(lookupChar('raa',-1)).to.equal('Incorrect index');
});
it('Should return char at index from given string',function(){
    expect(lookupChar('raa',2)).to.equal('a');
});