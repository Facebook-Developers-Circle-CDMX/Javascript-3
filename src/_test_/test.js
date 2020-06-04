const testFunction = require('../index.js');

describe('App', function () {

    it('testing...', function () {
        expect(testFunction([1,2,3,4,5,6,4,3])).toBe(4);
        expect(testFunction([23,4,2,87,4,2])).toBe(4);
        expect(testFunction([2,4,4,2,5,3,2])).toBe(4);
        expect(testFunction([0,4,33,0,6,4])).toBe(0);
    })
})
