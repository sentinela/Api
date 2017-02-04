const httpResponseHandler = require('../../middlewares').httpResponseHandler;
const BiddingController = require('../../app/bidding').BiddingController;
const controller = new BiddingController();

const biddingRoute = {
  config: app => app.route('/api/v1/bidding').post(httpResponseHandler(controller.saveBidding).intercept)
}

module.exports = biddingRoute;
