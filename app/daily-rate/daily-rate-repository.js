const DailyRateSchema = require('./daily-rate-schema');

class DailyRateRepository {

  saveDailyRate(dailyRate) {
    return new DailyRateSchema(dailyRate).save();
  }

  searchDailyRates(searchParams) {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }

}

module.exports = DailyRateRepository;
