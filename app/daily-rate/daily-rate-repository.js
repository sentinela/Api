const DailyRateSchema = require('./daily-rate-schema');
const ApplicationError = require('../../messages').ApplicationError;
const resources = require('../../config/').resouce;

class DailyRateRepository {

  constructor() {
    this._thereIsADailyRateWith = (id, ibgeCode) => {
      return new Promise((resolve, reject) => {
        resolve(true);
      });
    };
  }

  saveDailyRate(dailyRate) {
    return new Promise((resolve, reject) => {
      this._thereIsADailyRateWith(dailyRate.id, dailyRate.ibgeCode).then((thereIsDailyRate) => {
        if (thereIsDailyRate) {
          new DailyRateSchema(dailyRate).save().then(resolve, reject);
        } else {
          reject(new ApplicationError(resources.ALREADY_EXIST_A_DAILY_RATE_WITH_THIS_ID_AND_IBGE_CODE));
        }
      });
    });
  }

  searchDailyRates(searchParams) {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }

}

module.exports = DailyRateRepository;
