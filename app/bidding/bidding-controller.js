const q = require('q');

class BiddingController {
  saveBidding(req, res) {
    var deferred = q.defer();
    deferred.resolve();
    return deferred.promise;
  }
}

module.exports = BiddingController;
