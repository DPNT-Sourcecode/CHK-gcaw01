import {sum} from './sum'
import chai from 'chai';
const should = chai.should();

describe('sum', () => {
  it('should know 1+1 = 2', () => {
    sum(1,1).should.equal(2)
  })

  it('should throw an exception when passed in numbers outside of the 0 - 100 range', () => {
    sum(1,5).should.equal(6)
  })
})
