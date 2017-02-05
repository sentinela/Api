const DailyRateSchema = require('./daily-rate-schema');
const resource = require('../../config/resource');
const BusinessError = require('../../messages').BusinessError;
const Success = require('../../messages').Success;

class DailyRateRepository {

  constructor() {
    this._thereIsADailyRateWith = (id, ibgeCode) => {
      return new Promise((resolve, reject) => {
        DailyRateSchema
          .findOne({ id, ibgeCode })
          .exec().then((dailyRate) => {
            resolve(!!dailyRate);
          }, reject);
      });
    };
  }

  saveDailyRate(dailyRate) {
    return new Promise((resolve, reject) => {
      this._thereIsADailyRateWith(dailyRate.id, dailyRate.ibgeCode).then((thereIsDailyRate) => {
        if (!thereIsDailyRate) {
          new DailyRateSchema(dailyRate).save().then(resolve, reject);
        } else {
          reject(new BusinessError([resource.dailyRate.ALREADY_EXIST_A_DAILY_RATE_WITH_THIS_ID_AND_IBGE_CODE]));
        }
      });
    });
  }

  searchDailyRates(searchParams) {
    return new Promise((resolve, reject) => {
      DailyRateSchema.find({}).then((dailyRates) => {
        resolve(new Success().withData({ dailyRates: dailyRates || [] }));
      }, reject);
    });
  }

}

module.exports = DailyRateRepository;
