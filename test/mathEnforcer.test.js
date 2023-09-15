const { it } = require('mocha');
const mathEnforcer = require('../07.Unit Testing and Error Handling/More Exercises/04.Math Enforcer');
const expect = require('chai').expect;
describe('mathEnforcer',function(){
    describe('addFive',function(){
        it('Should return undefined when input is different from number',function(){
            expect(mathEnforcer.addFive('5')).to.equal(undefined);
        });
        it('Should return input + 5 from number',function(){
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });
        it('Should return input + 5 from number',function(){
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });
        it('Should return result with accurancy with 0.01 and less',function(){
            expect(mathEnforcer.addFive(5.001)).to.be.closeTo(10, 0.01);
        });
    });
    describe('subtractTen',function(){
        it('Should return undefined when input is different from number',function(){
            expect(mathEnforcer.subtractTen('5')).to.equal(undefined);
        });
        it('Should return input - 10 from number',function(){
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
        });
        it('Should return input - 10 from number',function(){
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
        });
        it('Should return result with accurancy with 0.01 and less',function(){
            expect(mathEnforcer.subtractTen(5.001)).to.be.closeTo(-5, 0.01);
        });
    });
    describe('sum',function(){
        it('Should return undefined when first input num is different from number',function(){
            expect(mathEnforcer.sum('5',5)).to.equal(undefined);
        });
        it('Should return undefined when second input num is different from number',function(){
            expect(mathEnforcer.sum(5,'5')).to.equal(undefined);
        });
        it('Should return the sum of the two numbers from input',function(){
            expect(mathEnforcer.sum(5,5)).to.equal(10);
        });
        it('Should return the sum of the two numbers from input',function(){
            expect(mathEnforcer.sum(5,-5)).to.equal(0);
        });
        it('Should return the sum of the two numbers from input',function(){
            expect(mathEnforcer.sum(-5,5)).to.equal(0);
        });
        it('Should return result with accurancy with 0.01 and less',function(){
            expect(mathEnforcer.sum(5.001,5)).to.be.closeTo(10, 0.01);
        });
        it('Should return result with accurancy with 0.01 and less',function(){
            expect(mathEnforcer.sum(5,5.001)).to.be.closeTo(10, 0.01);
        });
    });
});