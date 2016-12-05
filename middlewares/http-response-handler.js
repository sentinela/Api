(() => {
  'use strict';

  const messages = require('../messages');

  const httpResponseHandler = (action, validator) => {

    const _intercept = (req, res, next) => {

      if (validator) {
        let validation = validator.validate(req, res);
        if (!validation.valid) {
          return res.status(400).json(validation.error);
        }
      }

      action(req, res, next).then((result) => {
        if (result && result.type === messages.messageType.success) {
          return res.status(200).json(result.values());
        } else {
          return res.status(200).json(new messages.Success(result).values());
        }
      }, (error) => {
        if (error) {
          switch (error.type) {
            case messages.messageType.businessError:
              return res.status(400).json(result.values());
            case messages.messageType.applicationError:
              return res.status(500).json(result.values());
            case messages.messageType.unauthorised:
              return res.status(401).json(result.values());
            default:
              break;
          }
        }
        return res.status(500).json(new messages.ApplicationError().values());
      });
    };

    return {
      intercept: _intercept
    };
  };

  module.exports = httpResponseHandler;

})();
