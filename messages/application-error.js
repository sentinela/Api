(() => {
  'use strict';

  var messageType = require('./message-type');
  var Message = require('./message');

  class ApplicationError extends Message {

    constructor(messages) {
      super(messageType.applicationError, messages);
    }
  }

  module.exports = ApplicationError;

})();
