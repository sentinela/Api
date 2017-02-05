const expressConfig = () => {

  const express = require('express');
  const bodyParser = require('body-parser');

  const enableCorsHandler = require('../middlewares').enableCorsHandler;
  const dailyRateRoute = require('../app/daily-rate').dailyRateRoute;

  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(enableCorsHandler);

  dailyRateRoute.config(app);

  return app;
};

module.exports = expressConfig();
