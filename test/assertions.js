var should = require('should');

should.Assertion.add('haveSameMessages', function(otherCodes) {
  let thisCodes = this.obj.map((m) => {
    return m.code;
  });

  thisCodes.forEach(thisCode => {
    otherCodes.should.containEql(thisCode);
  });

  this.obj.length.should.be.equal(otherCodes.length);
});
