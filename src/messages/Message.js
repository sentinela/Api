(() => {
  'use strict';

  const messageType = require('./messageType');

  class Message {

    constructor(type, messages, data) {
      this._type = type;
      this._messages = messages;
      this._data = data;
    }

    values() {
      return {
        valid: this._type === messageType.success,
        data: this._data,
        messages: this._messages
      };
    }
  }

  module.exports = Message;

})();
