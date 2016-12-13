const _validate = (req) => {
  return {
    valid: true
  };
};

const searchDailyRatesValidator = {
  validate: _validate
};

module.exports = searchDailyRatesValidator;
