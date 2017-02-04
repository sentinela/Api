(() => {
  'use strict';

  var messageType = require('./message-type');
  var Message = require('./message');

  class BusinessError extends Message {

    constructor(messages) {
      super(messageType.businessError, messages);
    }
  }

  module.exports = BusinessError;

})();
