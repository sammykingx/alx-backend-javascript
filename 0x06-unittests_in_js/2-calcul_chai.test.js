const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('#calculateNumber() with type SUM', () => {
  it('should return 4 when adding 1 and 3', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });
  it('should return 5 when adding 1 and 3.7', () => {
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
  });
  it('should return 5 when adding 1.2 and 3.7', () => {
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
  });
  it('should return 6 when adding 1.5 and 3.7', () => {
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  });
  it('should return 0 when adding 0.1 and 0.3', () => {
    expect(calculateNumber('SUM', 0.1, 0.3)).to.equal(0);
  });
  it('should return 0 when adding -0.7 and 0.7', () => {
    expect(calculateNumber('SUM', -0.7, 0.7)).to.equal(0);
  });
  it('should return -2 when adding -0.8 and -0.7', () => {
    expect(calculateNumber('SUM', -0.8, -0.7)).to.equal(-2);
  });
});

describe('#calculateNumber() with type SUBTRACT', () => {
  it('should return -2 when subtracting 1 and 3', () => {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
  });
  it('should return -4 when subtracting 1.4 and 4.5', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
  it('should return -3 when subtracting 1.2 and 3.7', () => {
    expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
  });
  it('should return -2 when subtracting 1.5 and 3.7', () => {
    expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
  });
  it('should return 0 when subtracting 0.1 and 0.3', () => {
    expect(calculateNumber('SUBTRACT', 0.1, 0.3)).to.equal(0);
  });
  it('should return -2 when subtracting -0.7 and 0.7', () => {
    expect(calculateNumber('SUBTRACT', -0.7, 0.7)).to.equal(-2);
  });
  it('should return 0 when subtracting -0.8 and -0.7', () => {
    expect(calculateNumber('SUBTRACT', -0.8, -0.7)).to.equal(0);
  });
  it('should return 1 when subtracting 0.8 and -0.4', () => {
    expect(calculateNumber('SUBTRACT', 0.8, -0.4)).to.equal(1);
  });
});

describe('#calculateNumber() with type DIVIDE', () => {
  it('should return 0.25 when dividing 1 and 4', () => {
    expect(calculateNumber('DIVIDE', 1, 4)).to.equal(0.25);
  });
  it('should return 0.25 when dividing 1 and 3.7', () => {
    expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
  });
  it('should return 0.2 when dividing 1.4 and 4.5', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
  it('should return 1 when dividing 1.6 and 2.4', () => {
    expect(calculateNumber('DIVIDE', 1.6, 2.4)).to.equal(1);
  });
  it('should return 2 when dividing 4.2 and 1.5', () => {
    expect(calculateNumber('DIVIDE', 4.2, 1.5)).to.equal(2);
  });
  it("should return 'Error' when dividing 1.3 and 0.3", () => {
    expect(calculateNumber('DIVIDE', 1.3, 0.3)).to.equal('Error');
  });
  it('should return -1 when dividing -0.7 and 0.7', () => {
    expect(calculateNumber('DIVIDE', -0.7, 0.7)).to.equal(-1);
  });
  it('should return 1 when dividing -0.8 and -0.7', () => {
    expect(calculateNumber('DIVIDE', -0.8, -0.7)).to.equal(1);
  });
  it('should return -22 when dividing -44.5 and 2.4', () => {
    expect(calculateNumber('DIVIDE', -44.5, 2.4)).to.equal(-22);
  });
  it('should return 22 when dividing -88.5 and -3.6', () => {
    expect(calculateNumber('DIVIDE', -88.5, -3.6)).to.equal(22);
  });
});
