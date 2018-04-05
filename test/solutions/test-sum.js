const sum = require('../../lib/solutions/sum');
const expect = require('chai').expect;

describe('sum', () => {
  it('should know 1+1 = 2', () => {
    expect(sum(1,1)).to.equal(2)
  })

  it('should throw an exception when passed in numbers larger than 100', () => {
      expect(sum(2,101)).to.throw("Invalid arguments")
  })
})