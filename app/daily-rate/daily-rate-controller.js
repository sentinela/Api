const DailyRateRepository = require('./daily-rate-repository');

class DailyRateController {

  constructor() {
    this._dailyRateRepository = new DailyRateRepository();
  }

  saveDailyRate(req, res) {
    return this._dailyRateRepository.saveDailyRate();
  }

  searchDailyRates(req, res) {
    return this._dailyRateRepository.searchDailyRates();
  }

}

module.exports = DailyRateController;
