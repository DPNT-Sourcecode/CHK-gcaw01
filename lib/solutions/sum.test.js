import {sum} from './sum'
const expect = require('chai').expect;

describe('sum', () => {
  it('should know 1+1 = 2', () => {
    expect(sum(1,1)).to.equal(2)
  })

  it('should throw an exception when passed in numbers outside of the 0 - 100 range', () => {
  })
})
