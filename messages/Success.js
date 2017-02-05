const messageType = require('./message-type');
const Message = require('./message');

class Success extends Message {
  constructor(messages) {
    super(messageType.success, messages);
  }

  withData(data) {
    super.data = data;
    return this;
  }
}

module.exports = Success;
