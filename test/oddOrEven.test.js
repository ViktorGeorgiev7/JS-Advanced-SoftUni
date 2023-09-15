const { it } = require('mocha');
const isOddOrEven = require('../07.Unit Testing and Error Handling/More Exercises/02.Even or Odd');
const expect = require('chai').expect;
console.log(isOddOrEven);
it('Should return undefined when input is different from string',function(){
expect(isOddOrEven(5)).to.equal(undefined);
});
it('Should return undefined when input is different from string',function(){
    expect(isOddOrEven({})).to.equal(undefined);
});
it('Should return undefined when input is different from string',function(){
    expect(isOddOrEven([])).to.equal(undefined);
});
it('Should return even when input is with even length(x%2==0)',function(){
    expect(isOddOrEven('ra')).to.equal('even');
});
it('Should return odd when input is with odd length(x%2!=0)',function(){
    expect(isOddOrEven('raa')).to.equal('odd');
});
//test works properly in judge but wrong when -npm run test- is executed
//it('Should return odd when input is with odd length(x%2!=0)',function(){
//    let array = ['a','aa','bbb'];
//    let state = 'odd';
//    for (let i = 0; i <=array.length; i++) {
//        if (array[i].length%2===0) {
//            state='even';
//        }
//        expect(isOddOrEven(array[i])).to.equal(state);
//    }
//});