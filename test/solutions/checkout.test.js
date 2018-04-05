const calculate_value = require('../../lib/solutions/checkout');
const expect = require('chai').expect;

describe('basket', () => {
  it('should return 0 for an empty basket', () => {
    expect(calculate_value('')).to.equal(0)
  })

  it('should return -1 on bad input', () => {
    expect(calculate_value('ABCDm')).to.equal(-1)
    expect(calculate_value('ABCd')).to.equal(-1)
  })

  it('should calculate the value of items in a basket when there are no promotions', () => {
    expect(calculate_value('ADBCDD')).to.equal(145)
    expect(calculate_value('AA')).to.equal(100)
  })

  it('should take into account promotions', () => {
    expect(calculate_value('AAA')).to.equal(130)
    expect(calculate_value('BB')).to.equal(45)
    expect(calculate_value('ABAA')).to.equal(160)
    expect(calculate_value('ABAACCC')).to.equal(220)
  })

  it('should take into account multiple promotions', () => {
    expect(calculate_value('AAAAAA')).to.equal(260)
    expect(calculate_value('BBBB')).to.equal(90)

    expect(calculate_value('AAABB')).to.equal(175)
    expect(calculate_value('ABCAAB')).to.equal(195)
  })
})
