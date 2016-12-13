const Joi = require('joi');

const _validateAll = (obj, schemas) => {
  let errors = [];

  (schemas || []).forEach((s) => {
    let result = Joi.validate(s.getValue(obj), s.schema);
    if (!!result.error) errors.push(s.errorMessage);
  });

  return {
    errors: errors,
    valid: errors.length === 0
  };
};

const validationHelper = {
  validate: _validateAll
};

module.exports = validationHelper;
