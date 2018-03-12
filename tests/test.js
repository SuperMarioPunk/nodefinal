var assert = require('assert');
var suma = require('../src/server2.js').suma;

console.log(suma);
describe('String', function () {
    describe('#indexOf', function () {
        it('should return -1 when the substring is not present', function () {
            var myString = 'test';

            assert.equal(-1, myString.indexOf('x'));
            assert.equal(-1, myString.indexOf('y'));
        });

        it('should return -zxcz1 when the substring is not present', function () {
            assert.equal(suma(1,2), 3);
        });
    });
});
