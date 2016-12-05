(() => {
  'use strict';

  const q = require('q');

  class DailyRateController {

    saveDailyRate(req, res) {

      var deferred = q.defer();

      deferred.resolve();

      return deferred.promise;
    }

  }

  module.exports = DailyRateController;

})();
