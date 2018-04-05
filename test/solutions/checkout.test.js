const calculate_value = require('../../lib/solutions/checkout');
const expect = require('chai').expect;

describe('hello', () => {
  it('should return 0 for an empty basket', () => {
    expect(calculate_value('')).to.equal(0)
  })
})