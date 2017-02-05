const routesHelper = require('../../helpers').routesHelper;
const dailyRateModule = require('../../app/daily-rate');
const DailyRateController = dailyRateModule.DailyRateController;
const saveDailyRateValidator = dailyRateModule.saveDailyRateValidator;
const searchDailyRatesValidator = dailyRateModule.searchDailyRatesValidator;

const dailyRateRoute = {
  config: (app) => {

    routesHelper.post(app, '/api/v1/daily-rate', (req, res, next) => {
      return new DailyRateController().saveDailyRate(req, res, next);
    }, saveDailyRateValidator);

    routesHelper.get(app, '/api/v1/daily-rate', (req, res, next) => {
      return new DailyRateController().searchDailyRates(req, res, next);
    }, searchDailyRatesValidator);
  }
};

module.exports = dailyRateRoute;
