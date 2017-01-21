const MongoClient  = require('../../infra').MongoClient;
const mongoConnection = new MongoClient().connection;

const DailyRateSchema = mongoConnection.Schema({
  ibgeCode: {
    type: Number,
    required: true
  },
  id: {
    type: Number,
    required: true
  },
  city: {
    type: String,
    required: true
  },
	benefited: {
    type: String,
    required: true
  },
	role: {
    type: String,
    required: true
  },
	empenho: {
    type: String,
    required: true
  },
 	launchDate: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
	history: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  }
});

DailyRateSchema.index({
  id: 1,
  ibgeCode: 1
}, {
  unique: true
});

module.exports = mongoConnection.model('DailyRate', DailyRateSchema);
