const { it } = require('mocha');
const calc = require('../07.Unit Testing and Error Handling/Lab/07.Add&Subtract');
const expect = require('chai').expect;

let calculator = calc();
//check for available properties in return object
it('Should return a module (object), containing the functions add() as property',function(){
    expect(calculator).to.have.a.property('add').and.to.be.a('function');
});
it('Should return a module (object), containing the functions subtract() as property',function(){
    expect(calculator).to.have.a.property('subtract').and.to.be.a('function');
});
it('Should return a module (object), containing the functions get() as property',function(){
    expect(calculator).to.have.a.property('get').and.to.be.a('function');
});
it('Should return a module (object), that does not contain the property value',function(){
    expect(calculator).to.not.have.a.property('value');
});
//check inputs
it('Should check if get() returns the value of the internal sum',function(){
    calculator.add(2);
    expect(calculator.get()).to.equal(2);
});
it('Should throw error if add is given wrong input type',function(){
    calculator.add('non-parsable string')
    expect(calculator.get()).to.satisfy(Number.isNaN);
});
it('Should throw error if subtract is given wrong input type',function(){
    calculator.subtract('non-parsable string')
    expect(calculator.get()).to.satisfy(Number.isNaN);
});

