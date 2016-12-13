const Joi = require('joi');
const validationHelper = require('../../../helpers/validation-helper');
const resource = require('../../../config/resource');

const _schemas = [{
  schema: Joi.required(),
  errorMessage: resource.dailyRate.DAILY_RATE_IS_REQUIRED,
  getValue: (obj) => { return obj; }
}, {
  schema: Joi.object(),
  errorMessage: resource.dailyRate.DAILY_MUST_BE_AN_OBJECT,
  getValue: (obj) => { return obj; }
}, {
  schema: Joi.required(),
  errorMessage: resource.dailyRate.VALUE_IS_REQUIRED,
  getValue: (obj) => { return (obj || {}).value; }
}, {
  schema: Joi.number(),
  errorMessage: resource.dailyRate.VALUE_MUST_BE_A_NUMBER,
  getValue: (obj) => { return (obj || {}).value; }
}, {
  schema: Joi.required(),
  errorMessage: resource.dailyRate.YEAR_IS_REQUIRED,
  getValue: (obj) => { return (obj || {}).year; }
}, {
  schema: Joi.number(),
  errorMessage: resource.dailyRate.YEAR_MUST_BE_A_NUMBER,
  getValue: (obj) => { return (obj || {}).year; }
}, {
  schema: Joi.required(),
  errorMessage: resource.dailyRate.ENTITY_IS_REQUIRED,
  getValue: (obj) => { return (obj || {}).entity; }
}, {
  schema: Joi.string(),
  errorMessage: resource.dailyRate.ENTITY_MUST_BE_A_STRING,
  getValue: (obj) => { return (obj || {}).entity; }
}];

const _validate = (req) => {
  return validationHelper.validate((req.body || {}).dailyRate, _schemas);
};

const saveDailyRateValidator = {
  validate: _validate
};

module.exports = saveDailyRateValidator;
