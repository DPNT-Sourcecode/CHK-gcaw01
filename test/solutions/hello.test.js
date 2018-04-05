const hello = require('../../lib/solutions/hello');
const expect = require('chai').expect;

describe('sum', () => {
  it('should return hello', () => {
    expect(hello()).to.equal('Hello, World!')
  })
})