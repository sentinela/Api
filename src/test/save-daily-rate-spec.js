(function () {
  'use strict';

  var app = require('../config').express;

  var supertest = require('supertest')(app);
  var should = require("should");

  beforeEach(() => {
    // TODO: Implementar exclusão das collections quando trabalharmos com o mongo
  });

  describe('##### Save daily rate #####', function() {

    it('# Save a daily rate must return success', function(done) {
      supertest.post('/api/v1/daily-rate')
        .end(function (error, result) {
          should.not.exist(error);
          should.exist(result);
          result.status.should.equal(200);
          result.body.valid.should.equal(true);
          done();
        });
    });

  });

})();
