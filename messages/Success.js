(() => {
  'use strict';

  var messageType = require('./messageType');
  var Message = require('./Message');

  class Success extends Message {

    constructor(messages) {
      super(messageType.success, messages);
    }
  }

  module.exports = Success;

})();
