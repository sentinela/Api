(() => {
  'use strict';

  var messageType = require('./messageType');
  var Message = require('./Message');

  class Unauthorised extends Message {

    constructor(messages) {
      super(messageType.unauthorised, messages);
    }
  }

  module.exports = Unauthorised;

})();
