const assert = require('assert');
const calculateNumber = require('./1-calcul');
describe('calculateNumber', () => {
  it('Rounds and sums two numbers', () => {
      assert.equal(calculateNumber('SUM', 5, 5.5), 11);
      assert.equal(calculateNumber('FOO', 1, 3), 'Error');
      assert.equal(calculateNumber('SUM', -1.5, 2), 1);
      assert.equal(calculateNumber('SUM', 0.0, 0.0), 0);
  });
});

describe('calculateNumber', () => {
  it('Rounds and subtracts two numbers', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.1, 1.1), 0);
      assert.equal(calculateNumber('FOO', 1, 3), 'Error');
      assert.equal(calculateNumber('SUBTRACT', 1, 3.7), -3);
  });
});

describe('calculateNumber', () => {
  it('Rounds and Divides two numbers', () => {
      assert.equal(calculateNumber('DIVIDE', 2.7, 2.2), 1.5);
      assert.equal(calculateNumber('DIVIDE', 3.0, 0.3), 'Error');
      assert.equal(calculateNumber('FOO', 1, 3), 'Error');
      assert.equal(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
      assert.equal(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
  });
});
