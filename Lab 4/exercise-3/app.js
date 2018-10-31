
var should = require('should');
var calc = require('./calculator');


describe('Calculator', function(){
    describe('Adding two numbers', function(){
        it('Should be added correctly', function(){
            calc.addTwoNumbers(1,3).should.equal(4);
        })
        it('Should not be added correctly', function(){
            calc.addTwoNumbers(1,3).should.not.equal(5);
        })
        it('should throw a fucking error', function(){
            (function(){
                should(calc.addTwoNumbers(1,3)).throw();
            });
        });
    });
})


