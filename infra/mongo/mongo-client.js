const mongoose = require('mongoose');
const mongoConfig = require('../../config/mongo');

mongoose.Promise = require('bluebird');

const gracefulExit = () => {
  mongoose.connection.close().then(() => {
    process.exit(0);
  });
};

class MongoClient {

  constructor() {

    if (!mongoose.connection.readyState) {
      mongoose.connect('mongodb://' + mongoConfig.address + ':' + mongoConfig.port);
    }

    process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);
  }

  get connection() {
    return mongoose;
  }

  dropDatabase() {
    return mongoose.connection.db.dropDatabase();
  }
}

module.exports = MongoClient;
