const httpResponseHandler = require('../middlewares').httpResponseHandler;

const routesHelper = {

  post: (app, route, action, validator) => {
    app.route(route).post(httpResponseHandler((req, res, next) => {
      return action(req, res, next);
    }, validator).intercept);
  },

  get: (app, route, action, validator) => {
    app.route(route).post(httpResponseHandler((req, res, next) => {
      return action(req, res, next);
    }, validator).intercept);
  },

  put: (app, route, action, validator) => {
    app.route(route).post(httpResponseHandler((req, res, next) => {
      return action(req, res, next);
    }, validator).intercept);
  },

  delete: (app, route, action, validator) => {
    app.route(route).post(httpResponseHandler((req, res, next) => {
      return action(req, res, next);
    }, validator).intercept);
  }
};

module.exports = routesHelper;
