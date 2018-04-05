const calculate_value = require('../../lib/solutions/checkout');
const expect = require('chai').expect;

describe('basket', () => {
  it('should return 0 for an empty basket', () => {
    expect(calculate_value('')).to.equal(0)
  })

  it('should return -1 on bad input', () => {
    expect(calculate_value('ABCDm')).to.equal(-1)
  })

  it('should calculate the value of items in a basket when there are no promotions', () => {
    expect(calculate_value('ADBCDD')).to.equal(145)
  })

  it('should take into account promotions', () => {
    expect(calculate_value('AABA')).to.equal(225)
  })
})