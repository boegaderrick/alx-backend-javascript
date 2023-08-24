const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');
describe('calculateNumber', () => {
  it('Rounds and sums two numbers', () => {
      expect(calculateNumber('SUM', 5, 5.5)).to.equal(11);
      expect(calculateNumber('FOO', 1, 3)).to.equal('Error');
      expect(calculateNumber('SUM', -1.5, 2)).to.equal(1);
      expect(calculateNumber('SUM', 0.0, 0.0)).to.equal(0);
  });
});

describe('calculateNumber', () => {
  it('Rounds and subtracts two numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.1, 1.1)).to.equal(0);
      expect(calculateNumber('FOO', 1, 3)).to.equal('Error');
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
  });
});

describe('calculateNumber', () => {
  it('Rounds and Divides two numbers', () => {
      expect(calculateNumber('DIVIDE', 2.7, 2.2)).to.equal(1.5);
      expect(calculateNumber('DIVIDE', 3.0, 0.3)).to.equal('Error');
      expect(calculateNumber('FOO', 1, 3)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
      expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
  });
});
