(() => {
  'use strict';

  var messageType = require('./messageType');
  var Message = require('./Message');

  class ApplicationError extends Message {

    constructor(messages) {
      super(messageType.applicationError, messages);
    }
  }

  module.exports = ApplicationError;

})();
