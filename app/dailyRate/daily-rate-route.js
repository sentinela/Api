const httpResponseHandler = require('../../middlewares').httpResponseHandler;
const DailyRateController = require('../../app/dailyRate').DailyRateController;

const controller = new DailyRateController();

const dailyRateRoute = {
  config: (app) => {
    app.route('/api/v1/daily-rate').post(httpResponseHandler(controller.saveDailyRate).intercept);
  }
};

module.exports = dailyRateRoute;
