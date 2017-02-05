const messages = require('../messages');

const httpResponseHandler = (action, validator) => {

  const _intercept = (req, res, next) => {

    if (validator) {
      let validation = validator.validate(req);
      if (!validation.valid) {
        return res.status(400).json(new messages.BusinessError(validation.errors).values());
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

        if (error.values) {
          error = error.values();
        }

        switch (error.type) {
          case messages.messageType.businessError:
            return res.status(400).json(error);
          case messages.messageType.applicationError:
            return res.status(500).json(error);
          case messages.messageType.unauthorised:
            return res.status(401).json(error);
          default:
            break;
        }
      } else {
        return res.status(500).json(new messages.ApplicationError().values());
      }

    });
  };

  return {
    intercept: _intercept
  };
};

module.exports = httpResponseHandler;
