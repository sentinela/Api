const assertions = require('./assertions');
const app = require('../config').express;
const supertest = require('supertest')(app);
const should = require('should');

const MongoClient  = require('../infra').MongoClient;
const mongoClient = new MongoClient();

beforeEach((done) => {
  mongoClient.dropDatabase().then(() => {
    done();
  }, done);
});

describe('##### Save a daily rate #####', () => {

  it('# Save a daily rate must return success', (done) => {
    supertest.post('/api/v1/daily-rate')
      .send({
        dailyRate: {
          year: 2016,
          value: 123.123,
          entity: 'test'
        }
      })
      .end((error, result) => {
        should.not.exist(error);
        should.exist(result);
        result.status.should.equal(200);
        result.body.valid.should.equal(true);
        done();
      });
  });

  it('# Save a daily rate without a daily rate object must return bad request', (done) => {
    supertest.post('/api/v1/daily-rate')
      .end((error, result) => {
        should.not.exist(error);
        should.exist(result);
        result.status.should.equal(400);
        result.body.valid.should.equal(false);
        result.body.messages.should.haveSameMessages([
          'DAILY-RATE-0001',
          'DAILY-RATE-0003',
          'DAILY-RATE-0005',
          'DAILY-RATE-0007'
        ]);
        done();
      });
  });

  it('# Save a daily rate without a daily rate value must return bad request', (done) => {
    supertest.post('/api/v1/daily-rate')
      .send({
        dailyRate: {
          year: 2016,
          entity: 'test'
        }
      })
      .end((error, result) => {
        should.not.exist(error);
        should.exist(result);
        result.status.should.equal(400);
        result.body.valid.should.equal(false);
        result.body.messages.should.haveSameMessages([
          'DAILY-RATE-0003'
        ]);
        done();
      });
  });

  it('# Save a daily rate with a invalid daily rate value must return bad request', (done) => {
    supertest.post('/api/v1/daily-rate')
      .send({
        dailyRate: {
          year: 2016,
          value: true,
          entity: 'test'
        }
      })
      .end((error, result) => {
        should.not.exist(error);
        should.exist(result);
        result.status.should.equal(400);
        result.body.valid.should.equal(false);
        result.body.messages.should.haveSameMessages([
          'DAILY-RATE-0004'
        ]);
        done();
      });
  });

  it('# Save a daily rate without a daily rate year must return bad request', (done) => {
    supertest.post('/api/v1/daily-rate')
      .send({
        dailyRate: {
          value: 123.123,
          entity: 'test'
        }
      })
      .end((error, result) => {
        should.not.exist(error);
        should.exist(result);
        result.status.should.equal(400);
        result.body.valid.should.equal(false);
        result.body.messages.should.haveSameMessages([
          'DAILY-RATE-0005'
        ]);
        done();
      });
  });

  it('# Save a daily rate with a invalid daily rate year must return bad request', (done) => {
    supertest.post('/api/v1/daily-rate')
      .send({
        dailyRate: {
          year: 'qwe',
          value: 123.123,
          entity: 'test'
        }
      })
      .end((error, result) => {
        should.not.exist(error);
        should.exist(result);
        result.status.should.equal(400);
        result.body.valid.should.equal(false);
        result.body.messages.should.haveSameMessages([
          'DAILY-RATE-0006'
        ]);
        done();
      });
  });

  it('# Save a daily rate without a daily rate entity must return bad request', (done) => {
    supertest.post('/api/v1/daily-rate')
      .send({
        dailyRate: {
          year: 2016,
          value: 123.123
        }
      })
      .end((error, result) => {
        should.not.exist(error);
        should.exist(result);
        result.status.should.equal(400);
        result.body.valid.should.equal(false);
        result.body.messages.should.haveSameMessages([
          'DAILY-RATE-0007'
        ]);
        done();
      });
  });

  it('# Save a daily rate with a invalid daily entity value must return bad request', (done) => {
    supertest.post('/api/v1/daily-rate')
      .send({
        dailyRate: {
          year: 2016,
          value: 123.123,
          entity: 123
        }
      })
      .end((error, result) => {
        should.not.exist(error);
        should.exist(result);
        result.status.should.equal(400);
        result.body.valid.should.equal(false);
        result.body.messages.should.haveSameMessages([
          'DAILY-RATE-0008'
        ]);
        done();
      });
  });

});
