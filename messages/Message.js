(() => {
  'use strict';

  const messageType = require('./message-type');

  class Message {

    constructor(type, messages, data) {
      this._type = type;
      this._messages = messages;
      this._data = data;
    }

    get data() {
      return this._data;
    }

    set data(value) {
      this._data = value;
    }

    get valid() {
      return this._type === messageType.success;
    }

    get messages() {
      return this._messages;
    }

    get type() {
      return this._type;
    }

    values() {
      return {
        valid: this.valid,
        data: this.data,
        type: this.type,
        messages: this.messages
      };
    }
  }

  module.exports = Message;

})();
