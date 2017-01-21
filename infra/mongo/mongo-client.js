const mongoose = require('mongoose');
const mongoConfig = require('../../config/mongo');

const gracefulExit = () => {
  mongoose.connection.close(() => {
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
    return new Promise((resolve, reject) => {
      mongoose.connection.db.dropDatabase(error => {
        if (error) reject(error);
        else resolve();
      });
    });
  }
}

module.exports = MongoClient;
