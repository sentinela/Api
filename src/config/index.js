(() => {
  'use strict';

  module.exports.api = require('./api');
  module.exports.express = require('./express');
  module.exports.mongo = require('./mongo');
  module.exports.resource = require('./resource');

})();
