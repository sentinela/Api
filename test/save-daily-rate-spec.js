const assertions = require('./assertions');
const app = require('../config').express;
const supertest = require('supertest')(app);
const should = require('should');

const MongoClient  = require('../infra').MongoClient;
const mongoClient = new MongoClient();

const DailyRateSchema = require('../app/daily-rate').DailyRateSchema;
const DailyRateRepository = require('../app/daily-rate').DailyRateRepository;

const dailyRateWasCorrectlySaved = (done) => {
  DailyRateSchema
    .findOne({
      id: dailyRateToSave.id,
      ibgeCode: dailyRateToSave.ibgeCode
    })
    .exec().then((dailyRate) => {
      try {
        should(dailyRate).not.equal(null);
        should(dailyRate).not.equal(undefined);
        dailyRate.ibgeCode.should.equal(dailyRateToSave.ibgeCode);
        dailyRate.id.should.equal(dailyRateToSave.id);
        dailyRate.city.should.equal(dailyRateToSave.city);
        dailyRate.benefited.should.equal(dailyRateToSave.benefited);
        dailyRate.role.should.equal(dailyRateToSave.role);
        dailyRate.empenho.should.equal(dailyRateToSave.empenho);
        dailyRate.launchDate.should.equal(dailyRateToSave.launchDate);
        dailyRate.value.should.equal(dailyRateToSave.value);
        dailyRate.history.should.equal(dailyRateToSave.history);
        dailyRate.year.should.equal(dailyRateToSave.year);
        done();
      } catch (e) {
        done(e);
      }
    }, done);
};

const saveDailyRate = (dailyRate) => {
  return new DailyRateRepository().saveDailyRate(dailyRate);
};

const dailyRateToSave = {
  ibgeCode: 123,
  id: 123,
  city: 'PREFEITURA MUNICIPAL DE GRAVATAI',
	benefited: 'ADAO DE CASTRO JUNIOR',
	role: 'SECRETÁRIO MUNICIPAL',
	empenho: '20862/2016',
 	launchDate: '2016-11-18',
  value: 653.03,
	history: 'Diárias para participar de audiência na Agência Nacional de Transportes Terrestres',
  year: 2016
};

beforeEach((done) => {
  mongoClient.dropDatabase().then(() => {
    done();
  }, done);
});

describe('##### Save a daily rate #####', () => {

  it('# Save a daily rate must return success', (done) => {
    supertest.post('/api/v1/daily-rate')
      .send({ dailyRate: dailyRateToSave })
      .end((error, result) => {
        should.not.exist(error);
        should.exist(result);
        result.status.should.equal(200);
        result.body.valid.should.equal(true);
        dailyRateWasCorrectlySaved(done);
      });
  });

  it('# Save a duplicated daily rate must return bad request', (done) => {

    saveDailyRate(dailyRateToSave).then(() => {
      supertest.post('/api/v1/daily-rate')
        .send({ dailyRate: dailyRateToSave })
        .end((error, result) => {
          should.not.exist(error);
          should.exist(result);
          result.status.should.equal(400);
          result.body.valid.should.equal(false);
          result.body.messages.should.haveSameMessages([
            'DAILY-RATE-0013'
          ]);
          done();
        });
    }, done);
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
          'DAILY-RATE-0007',
          'DAILY-RATE-0009',
          'DAILY-RATE-0011'
        ]);
        done();
      });
  });

  it('# Save a daily rate without a  value must return bad request', (done) => {
    supertest.post('/api/v1/daily-rate')
      .send({
        dailyRate: Object.assign({}, dailyRateToSave, {
          value: undefined
        })
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

  it('# Save a daily rate with a invalid value must return bad request', (done) => {
    supertest.post('/api/v1/daily-rate')
      .send({
        dailyRate: Object.assign({}, dailyRateToSave, {
          value: -1
        })
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

  it('# Save a daily rate without a ibge code must return bad request', (done) => {
    supertest.post('/api/v1/daily-rate')
      .send({
        dailyRate: Object.assign({}, dailyRateToSave, {
          ibgeCode: undefined
        })
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

  it('# Save a daily rate with a invalid ibge code must return bad request', (done) => {
    supertest.post('/api/v1/daily-rate')
      .send({
        dailyRate: Object.assign({}, dailyRateToSave, {
          ibgeCode: -1
        })
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

  it('# Save a daily rate without a identifier must return bad request', (done) => {
    supertest.post('/api/v1/daily-rate')
      .send({
        dailyRate: Object.assign({}, dailyRateToSave, {
          id: undefined
        })
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

  it('# Save a daily rate with a invalid  identifier must return bad request', (done) => {
    supertest.post('/api/v1/daily-rate')
      .send({
        dailyRate: Object.assign({}, dailyRateToSave, {
          id: -1
        })
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

  it('# Save a daily rate without a  year must return bad request', (done) => {
    supertest.post('/api/v1/daily-rate')
      .send({
        dailyRate: Object.assign({}, dailyRateToSave, {
          year: undefined
        })
      })
      .end((error, result) => {
        should.not.exist(error);
        should.exist(result);
        result.status.should.equal(400);
        result.body.valid.should.equal(false);
        result.body.messages.should.haveSameMessages([
          'DAILY-RATE-0009'
        ]);
        done();
      });
  });

  it('# Save a daily rate with a invalid  year must return bad request', (done) => {
    supertest.post('/api/v1/daily-rate')
      .send({
        dailyRate: Object.assign({}, dailyRateToSave, {
          year: 1899
        })
      })
      .end((error, result) => {
        should.not.exist(error);
        should.exist(result);
        result.status.should.equal(400);
        result.body.valid.should.equal(false);
        result.body.messages.should.haveSameMessages([
          'DAILY-RATE-0010'
        ]);
        done();
      });
  });

  it('# Save a daily rate without a  city must return bad request', (done) => {
    supertest.post('/api/v1/daily-rate')
      .send({
        dailyRate: Object.assign({}, dailyRateToSave, {
          city: undefined
        })
      })
      .end((error, result) => {
        should.not.exist(error);
        should.exist(result);
        result.status.should.equal(400);
        result.body.valid.should.equal(false);
        result.body.messages.should.haveSameMessages([
          'DAILY-RATE-0011'
        ]);
        done();
      });
  });

  it('# Save a daily rate with a invalid daily city value must return bad request', (done) => {
    supertest.post('/api/v1/daily-rate')
      .send({
        dailyRate: Object.assign({}, dailyRateToSave, {
          city: true
        })
      })
      .end((error, result) => {
        should.not.exist(error);
        should.exist(result);
        result.status.should.equal(400);
        result.body.valid.should.equal(false);
        result.body.messages.should.haveSameMessages([
          'DAILY-RATE-0012'
        ]);
        done();
      });
  });

});
