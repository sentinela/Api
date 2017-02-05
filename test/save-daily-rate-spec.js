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
        should(dailyRate).not.eql(null);
        should(dailyRate).not.eql(undefined);
        dailyRate.ibgeCode.should.eql(dailyRateToSave.ibgeCode);
        dailyRate.id.should.eql(dailyRateToSave.id);
        dailyRate.city.should.eql(dailyRateToSave.city);
        dailyRate.benefited.should.eql(dailyRateToSave.benefited);
        dailyRate.role.should.eql(dailyRateToSave.role);
        dailyRate.empenho.should.eql(dailyRateToSave.empenho);
        dailyRate.launchDate.should.eql(dailyRateToSave.launchDate);
        dailyRate.value.should.eql(dailyRateToSave.value);
        dailyRate.history.should.eql(dailyRateToSave.history);
        dailyRate.year.should.eql(dailyRateToSave.year);
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
 	launchDate: new Date(),
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
        result.status.should.eql(200);
        result.body.valid.should.eql(true);
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
          result.status.should.eql(400);
          result.body.valid.should.eql(false);
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
        result.status.should.eql(400);
        result.body.valid.should.eql(false);
        result.body.messages.should.haveSameMessages([
          'DAILY-RATE-0001',
          'DAILY-RATE-0003',
          'DAILY-RATE-0005',
          'DAILY-RATE-0007',
          'DAILY-RATE-0009',
          'DAILY-RATE-0011',
          'DAILY-RATE-0014',
          'DAILY-RATE-0016',
          'DAILY-RATE-0018',
          'DAILY-RATE-0020',
          'DAILY-RATE-0022'
        ]);
        done();
      });
  });

  it('# Save a daily rate without a value must return bad request', (done) => {
    supertest.post('/api/v1/daily-rate')
      .send({
        dailyRate: Object.assign({}, dailyRateToSave, {
          value: undefined
        })
      })
      .end((error, result) => {
        should.not.exist(error);
        should.exist(result);
        result.status.should.eql(400);
        result.body.valid.should.eql(false);
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
        result.status.should.eql(400);
        result.body.valid.should.eql(false);
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
        result.status.should.eql(400);
        result.body.valid.should.eql(false);
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
        result.status.should.eql(400);
        result.body.valid.should.eql(false);
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
        result.status.should.eql(400);
        result.body.valid.should.eql(false);
        result.body.messages.should.haveSameMessages([
          'DAILY-RATE-0007'
        ]);
        done();
      });
  });

  it('# Save a daily rate with a invalid identifier must return bad request', (done) => {
    supertest.post('/api/v1/daily-rate')
      .send({
        dailyRate: Object.assign({}, dailyRateToSave, {
          id: -1
        })
      })
      .end((error, result) => {
        should.not.exist(error);
        should.exist(result);
        result.status.should.eql(400);
        result.body.valid.should.eql(false);
        result.body.messages.should.haveSameMessages([
          'DAILY-RATE-0008'
        ]);
        done();
      });
  });

  it('# Save a daily rate without a year must return bad request', (done) => {
    supertest.post('/api/v1/daily-rate')
      .send({
        dailyRate: Object.assign({}, dailyRateToSave, {
          year: undefined
        })
      })
      .end((error, result) => {
        should.not.exist(error);
        should.exist(result);
        result.status.should.eql(400);
        result.body.valid.should.eql(false);
        result.body.messages.should.haveSameMessages([
          'DAILY-RATE-0009'
        ]);
        done();
      });
  });

  it('# Save a daily rate with a invalid year must return bad request', (done) => {
    supertest.post('/api/v1/daily-rate')
      .send({
        dailyRate: Object.assign({}, dailyRateToSave, {
          year: 1899
        })
      })
      .end((error, result) => {
        should.not.exist(error);
        should.exist(result);
        result.status.should.eql(400);
        result.body.valid.should.eql(false);
        result.body.messages.should.haveSameMessages([
          'DAILY-RATE-0010'
        ]);
        done();
      });
  });

  it('# Save a daily rate without a city must return bad request', (done) => {
    supertest.post('/api/v1/daily-rate')
      .send({
        dailyRate: Object.assign({}, dailyRateToSave, {
          city: undefined
        })
      })
      .end((error, result) => {
        should.not.exist(error);
        should.exist(result);
        result.status.should.eql(400);
        result.body.valid.should.eql(false);
        result.body.messages.should.haveSameMessages([
          'DAILY-RATE-0011'
        ]);
        done();
      });
  });

  it('# Save a daily rate with a invalid history must return bad request', (done) => {
    supertest.post('/api/v1/daily-rate')
      .send({
        dailyRate: Object.assign({}, dailyRateToSave, {
          history: false
        })
      })
      .end((error, result) => {
        should.not.exist(error);
        should.exist(result);
        result.status.should.eql(400);
        result.body.valid.should.eql(false);
        result.body.messages.should.haveSameMessages([
          'DAILY-RATE-0015'
        ]);
        done();
      });
  });

  it('# Save a daily rate without a history must return bad request', (done) => {
    supertest.post('/api/v1/daily-rate')
      .send({
        dailyRate: Object.assign({}, dailyRateToSave, {
          history: undefined
        })
      })
      .end((error, result) => {
        should.not.exist(error);
        should.exist(result);
        result.status.should.eql(400);
        result.body.valid.should.eql(false);
        result.body.messages.should.haveSameMessages([
          'DAILY-RATE-0014'
        ]);
        done();
      });
  });

  it('# Save a daily rate with a invalid launch date must return bad request', (done) => {
    supertest.post('/api/v1/daily-rate')
      .send({
        dailyRate: Object.assign({}, dailyRateToSave, {
          launchDate: false
        })
      })
      .end((error, result) => {
        should.not.exist(error);
        should.exist(result);
        result.status.should.eql(400);
        result.body.valid.should.eql(false);
        result.body.messages.should.haveSameMessages([
          'DAILY-RATE-0017'
        ]);
        done();
      });
  });

  it('# Save a daily rate without a launch date must return bad request', (done) => {
    supertest.post('/api/v1/daily-rate')
      .send({
        dailyRate: Object.assign({}, dailyRateToSave, {
          launchDate: undefined
        })
      })
      .end((error, result) => {
        should.not.exist(error);
        should.exist(result);
        result.status.should.eql(400);
        result.body.valid.should.eql(false);
        result.body.messages.should.haveSameMessages([
          'DAILY-RATE-0016'
        ]);
        done();
      });
  });

  it('# Save a daily rate with a invalid benefited must return bad request', (done) => {
    supertest.post('/api/v1/daily-rate')
      .send({
        dailyRate: Object.assign({}, dailyRateToSave, {
          benefited: false
        })
      })
      .end((error, result) => {
        should.not.exist(error);
        should.exist(result);
        result.status.should.eql(400);
        result.body.valid.should.eql(false);
        result.body.messages.should.haveSameMessages([
          'DAILY-RATE-0019'
        ]);
        done();
      });
  });

  it('# Save a daily rate without a benefited must return bad request', (done) => {
    supertest.post('/api/v1/daily-rate')
      .send({
        dailyRate: Object.assign({}, dailyRateToSave, {
          benefited: undefined
        })
      })
      .end((error, result) => {
        should.not.exist(error);
        should.exist(result);
        result.status.should.eql(400);
        result.body.valid.should.eql(false);
        result.body.messages.should.haveSameMessages([
          'DAILY-RATE-0018'
        ]);
        done();
      });
  });

  it('# Save a daily rate with a invalid role must return bad request', (done) => {
    supertest.post('/api/v1/daily-rate')
      .send({
        dailyRate: Object.assign({}, dailyRateToSave, {
          role: false
        })
      })
      .end((error, result) => {
        should.not.exist(error);
        should.exist(result);
        result.status.should.eql(400);
        result.body.valid.should.eql(false);
        result.body.messages.should.haveSameMessages([
          'DAILY-RATE-0021'
        ]);
        done();
      });
  });

  it('# Save a daily rate without a role must return bad request', (done) => {
    supertest.post('/api/v1/daily-rate')
      .send({
        dailyRate: Object.assign({}, dailyRateToSave, {
          role: undefined
        })
      })
      .end((error, result) => {
        should.not.exist(error);
        should.exist(result);
        result.status.should.eql(400);
        result.body.valid.should.eql(false);
        result.body.messages.should.haveSameMessages([
          'DAILY-RATE-0020'
        ]);
        done();
      });
  });

  it('# Save a daily rate with a empenho role must return bad request', (done) => {
    supertest.post('/api/v1/daily-rate')
      .send({
        dailyRate: Object.assign({}, dailyRateToSave, {
          empenho: false
        })
      })
      .end((error, result) => {
        should.not.exist(error);
        should.exist(result);
        result.status.should.eql(400);
        result.body.valid.should.eql(false);
        result.body.messages.should.haveSameMessages([
          'DAILY-RATE-0023'
        ]);
        done();
      });
  });

  it('# Save a daily rate without an empenho must return bad request', (done) => {
    supertest.post('/api/v1/daily-rate')
      .send({
        dailyRate: Object.assign({}, dailyRateToSave, {
          empenho: undefined
        })
      })
      .end((error, result) => {
        should.not.exist(error);
        should.exist(result);
        result.status.should.eql(400);
        result.body.valid.should.eql(false);
        result.body.messages.should.haveSameMessages([
          'DAILY-RATE-0022'
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
        result.status.should.eql(400);
        result.body.valid.should.eql(false);
        result.body.messages.should.haveSameMessages([
          'DAILY-RATE-0012'
        ]);
        done();
      });
  });

});
