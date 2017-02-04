const messageType = require('./message-type');
const Message = require('./message');

class Success extends Message {
  constructor(messages) {
    super(messageType.success, messages);
  }
}

module.exports = Success;
