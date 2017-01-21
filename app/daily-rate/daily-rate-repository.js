const DailyRateSchema = require('./daily-rate-schema');

class DailyRateRepository {

  saveDailyRate(dailyRate) {

    return new Promise((resolve, reject) => {
      new DailyRateSchema(dailyRate).save((error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
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
