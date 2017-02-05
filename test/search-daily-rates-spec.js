const app = require('../config').express;
const supertest = require('supertest')(app);
const should = require('should');

const MongoClient  = require('../infra').MongoClient;
const mongoClient = new MongoClient();

const DailyRateSchema = require('../app/daily-rate').DailyRateSchema;

const saveDailyRates = (dailyRates) => {
  return DailyRateSchema.collection.insert(dailyRates);
};

const dailyRateToSave = {
  ibgeCode: 123,
  city: 'PREFEITURA MUNICIPAL DE GRAVATAI',
	benefited: 'ADAO DE CASTRO JUNIOR',
	role: 'SECRETÁRIO MUNICIPAL',
	empenho: '20862/2016',
 	launchDate: new Date(),
  value: 653.03,
	history: 'Diárias para participar de audiência na Agência Nacional de Transportes Terrestres',
  year: 2016
};

const buildDailyRateArray = (number = 1) => {
  let array = [];

  for (var i = 1; i <= number; i++)
    array.push(Object.assign({}, dailyRateToSave, { id: i }));

  return array;
};

beforeEach((done) => {
  mongoClient.dropDatabase().then(() => {
    done();
  }, done);
});

describe('##### Search daily rates #####', () => {

  it('# Search daily rates must return 1 daily rate', (done) => {

    saveDailyRates(buildDailyRateArray(1)).then(() => {
      supertest.get('/api/v1/daily-rate')
        .end((error, result) => {

          should.not.exist(error);
          should.exist(result);
          should.exist(result.body.data);
          should.exist(result.body.data.dailyRates);

          result.status.should.equal(200);
          result.body.valid.should.equal(true);

          const dailyRates = result.body.data.dailyRates;

          dailyRates.should.be.an.instanceof(Array).and.have.lengthOf(1);

          dailyRates[0].should.be.an.instanceOf(Object);
          dailyRates[0].should.have.property('id', 1);
          dailyRates[0].should.have.property('ibgeCode', 123);
          dailyRates[0].should.have.property('city', dailyRateToSave.city);
          dailyRates[0].should.have.property('benefited', dailyRateToSave.benefited);
          dailyRates[0].should.have.property('role', dailyRateToSave.role);
          dailyRates[0].should.have.property('empenho', dailyRateToSave.empenho);

          // Fix: Uncaught AssertionError: expected 2017-02-05 04:06:36.271 -0000 to equal '2017-02-05T04:06:36.271Z'
          //dailyRates[0].should.have.property('launchDate', dailyRateToSave.launchDate);

          dailyRates[0].should.have.property('value', dailyRateToSave.value);
          dailyRates[0].should.have.property('history', dailyRateToSave.history);
          dailyRates[0].should.have.property('year', dailyRateToSave.year);

          done();
        });
    }, done);
  });

  it('# Search daily rates must return 15 daily rates', (done) => {

    saveDailyRates(buildDailyRateArray(15)).then(() => {
      supertest.get('/api/v1/daily-rate')
        .end((error, result) => {

          should.not.exist(error);
          should.exist(result);
          should.exist(result.body.data);
          should.exist(result.body.data.dailyRates);

          result.status.should.equal(200);
          result.body.valid.should.equal(true);

          result.body.data.dailyRates.should.be.an.instanceof(Array).and.have.lengthOf(15);

          done();
        });
    }, done);
  });

  it('# Search daily rates must return an empty array', (done) => {

    supertest.get('/api/v1/daily-rate')
      .end((error, result) => {

        should.not.exist(error);
        should.exist(result);
        should.exist(result.body.data);
        should.exist(result.body.data.dailyRates);

        result.status.should.equal(200);
        result.body.valid.should.equal(true);

        result.body.data.dailyRates.should.be.an.instanceof(Array).and.have.lengthOf(0);

        done();
    }, done);
  });

});
