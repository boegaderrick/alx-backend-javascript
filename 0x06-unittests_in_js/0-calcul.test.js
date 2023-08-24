const assert = require('assert');
const calculateNumber = require('./0-calcul');
describe('calculateNumber', () => {
  it('Rounds and sums two numbers', () => {
      assert.equal(calculateNumber(5, 5.5), 11);
      assert.equal(calculateNumber(1.1, 1.1), 2);
      assert.equal(calculateNumber(2.7, 2.2), 5);
      assert.equal(calculateNumber(3.0, 3), 6);
      assert.equal(calculateNumber(1, 3), 4);
      assert.equal(calculateNumber(1, 3.7), 5);
      assert.equal(calculateNumber(1.2, 3.7), 5);
      assert.equal(calculateNumber(1.5, 3.7), 6);
      assert.equal(calculateNumber(-1.5, 2), 1);
      assert.equal(calculateNumber(2.2, -1.7), 0);
      assert.equal(calculateNumber(-1.7, -1.7), -4);
  });
});
