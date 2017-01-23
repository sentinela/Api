(() => {
  'use strict';

  const messageType = require('./message-type');

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
        type: this._type,
        messages: this._messages
      };
    }
  }

  module.exports = Message;

})();
