(() => {
  'use strict';

  var messageType = require('./message-type');
  var Message = require('./message');

  class Unauthorised extends Message {

    constructor(messages) {
      super(messageType.unauthorised, messages);
    }
  }

  module.exports = Unauthorised;

})();
