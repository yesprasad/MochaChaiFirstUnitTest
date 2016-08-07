'use strict'

var chai = require('chai');
var expect = chai.expect;

chai.should();

function returnsName(name){
    return name;
};

function AddNumberToItself(num){
    return (num +num);
}

function IsEven(inputVal){
    return (inputVal%2)===0;
}

describe('1st unit test',function(){
    it('returns the name passed to the function',function(){
        returnsName('Eshwar').should.equal('Eshwar');
    });
});


describe('Math Operations',function(){
    it('returns a value that is by adding the same number we sent as input',function(){
        AddNumberToItself(5).should.equal(10);
    });

    it('should return true if the input number is divisible by 2',function(){
        IsEven(4).should.equal(true);
    });
});

