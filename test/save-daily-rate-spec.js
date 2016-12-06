const app = require('../config').express;
const supertest = require('supertest')(app);
const should = require('should');

beforeEach(() => {
  // TODO: Implementar exclusão das collections quando trabalharmos com o mongo
});

describe('##### Save daily rate #####', () => {
  it('# Save a daily rate must return success', (done) => {
    supertest.post('/api/v1/daily-rate')
      .end((error, result) => {
        should.not.exist(error);
        should.exist(result);
        result.status.should.equal(200);
        result.body.valid.should.equal(true);
        done();
      });
  });
});
