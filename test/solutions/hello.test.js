const hello = require('../../lib/solutions/hello');
const expect = require('chai').expect;

describe('hello', () => {
  it('should return hello followed by the friends name', () => {
    const name = 'gosgilnsg;'
    expect(hello(name)).to.equal(`Hello, ${name}!`)
  })
})