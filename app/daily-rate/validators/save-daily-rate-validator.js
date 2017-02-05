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
  errorMessage: resource.dailyRate.IBGE_CODE_IS_REQUIRED,
  getValue: (obj) => { return (obj || {}).ibgeCode; }
}, {
  schema: Joi.number().integer().min(0),
  errorMessage: resource.dailyRate.IBGE_CODE_MUST_BE_AN_INTEGER_BIGGER_THAN_ZERO,
  getValue: (obj) => { return (obj || {}).ibgeCode; }
}, {
  schema: Joi.required(),
  errorMessage: resource.dailyRate.ID_IS_REQUIRED,
  getValue: (obj) => { return (obj || {}).id; }
}, {
  schema: Joi.number().integer().min(0),
  errorMessage: resource.dailyRate.ID_MUST_BE_AN_INTEGER_BIGGER_THAN_ZERO,
  getValue: (obj) => { return (obj || {}).id; }
}, {
  schema: Joi.required(),
  errorMessage: resource.dailyRate.VALUE_IS_REQUIRED,
  getValue: (obj) => { return (obj || {}).value; }
}, {
  schema: Joi.number().min(0),
  errorMessage: resource.dailyRate.VALUE_MUST_BE_A_NUMBER_BIGGER_THAN_ZERO,
  getValue: (obj) => { return (obj || {}).value; }
}, {
  schema: Joi.required(),
  errorMessage: resource.dailyRate.YEAR_IS_REQUIRED,
  getValue: (obj) => { return (obj || {}).year; }
}, {
  schema: Joi.number().integer().min(1900),
  errorMessage: resource.dailyRate.YEAR_MUST_BE_AN_INTEGER_BIGGER_THAN_1900,
  getValue: (obj) => { return (obj || {}).year; }
}, {
  schema: Joi.required(),
  errorMessage: resource.dailyRate.CITY_IS_REQUIRED,
  getValue: (obj) => { return (obj || {}).city; }
}, {
  schema: Joi.string(),
  errorMessage: resource.dailyRate.CITY_MUST_BE_A_STRING,
  getValue: (obj) => { return (obj || {}).city; }
}, {
  schema: Joi.required(),
  errorMessage: resource.dailyRate.HISTORY_IS_REQUIRED,
  getValue: (obj) => { return (obj || {}).history; }
}, {
  schema: Joi.string(),
  errorMessage: resource.dailyRate.HISTORY_MUST_BE_A_STRING,
  getValue: (obj) => { return (obj || {}).history; }
}, {
  schema: Joi.required(),
  errorMessage: resource.dailyRate.LAUNCH_DATE_IS_REQUIRED,
  getValue: (obj) => { return (obj || {}).launchDate; }
}, {
  schema: Joi.string(),
  errorMessage: resource.dailyRate.LAUNCH_DATE_MUST_BE_A_DATE,
  getValue: (obj) => { return (obj || {}).launchDate; }
}, {
  schema: Joi.required(),
  errorMessage: resource.dailyRate.BENEFITED_IS_REQUIRED,
  getValue: (obj) => { return (obj || {}).benefited; }
}, {
  schema: Joi.string(),
  errorMessage: resource.dailyRate.BENEFITED_MUST_BE_A_STRING,
  getValue: (obj) => { return (obj || {}).benefited; }
}, {
  schema: Joi.required(),
  errorMessage: resource.dailyRate.ROLE_IS_REQUIRED,
  getValue: (obj) => { return (obj || {}).role; }
}, {
  schema: Joi.string(),
  errorMessage: resource.dailyRate.ROLE_MUST_BE_A_STRING,
  getValue: (obj) => { return (obj || {}).role; }
}, {
  schema: Joi.required(),
  errorMessage: resource.dailyRate.EMPENHO_IS_REQUIRED,
  getValue: (obj) => { return (obj || {}).empenho; }
}, {
  schema: Joi.string(),
  errorMessage: resource.dailyRate.EMPENHO_MUST_BE_A_STRING,
  getValue: (obj) => { return (obj || {}).empenho; }
}];

const _validate = (req) => {
  return validationHelper.validate((req.body || {}).dailyRate, _schemas);
};

const saveDailyRateValidator = {
  validate: _validate
};

module.exports = saveDailyRateValidator;
