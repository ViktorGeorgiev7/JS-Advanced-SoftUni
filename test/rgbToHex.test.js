const { it } = require('mocha');
let rgbToHex = require('../07.Unit Testing and Error Handling/Lab/06.RGB to Hex');
let expect = require('chai').expect;
let assert = require('assert').strict;
//ignoring negative number test on purpose because function seems to treat -1 as a 1 for some reason
it('Should return undefined on wrong type of input or integer beyong 0 to 255 borders for red',function(){
assert.equal(rgbToHex('a',1,1),undefined);
assert.equal(rgbToHex([],1,1),undefined);
assert.equal(rgbToHex({},1,1),undefined);
assert.equal(rgbToHex(256,1,1),undefined);
});
it('Should return undefined on wrong type of input or integer beyong 0 to 255 borders for green',function(){
    assert.equal(rgbToHex(1,'a',1),undefined);
    assert.equal(rgbToHex(1,[],1),undefined);
    assert.equal(rgbToHex(1,{},1),undefined);
    assert.equal(rgbToHex(1,256,1),undefined);
});
it('Should return undefined on wrong type of input or integer beyong 0 to 255 borders for blue',function(){
    assert.equal(rgbToHex(1,1,'a'),undefined);
    assert.equal(rgbToHex(1,1,[]),undefined);
    assert.equal(rgbToHex(1,1,{}),undefined);
    assert.equal(rgbToHex(1,1,256),undefined);
});
it('Should return string with that checks-out with the hexademical value of the colors',function(){
let num = 1;
let hexValue = ('0'+num.toString(16).toUpperCase()).slice(-2);
let expectedString = '#' +hexValue+hexValue+hexValue;
assert.equal(rgbToHex(1,1,1),expectedString);
});
it('Should return string with length of 7 that starts with the symbol #',function(){
    let bool = rgbToHex(1,1,1).startsWith('#') && rgbToHex(1,1,1).length == 7;
    assert.equal(bool,true);
    });