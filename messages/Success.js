const messageType = require('./messageType');
const Message = require('./Message');

class Success extends Message {
  constructor(messages) {
    super(messageType.success, messages);
  }
}

module.exports = Success;
