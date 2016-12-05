(() => {
  'use strict';

  var messageType = require('./messageType');
  var Message = require('./Message');

  class BusinessError extends Message {

    constructor(messages) {
      super(messageType.businessError, messages);
    }
  }

  module.exports = BusinessError;

})();
