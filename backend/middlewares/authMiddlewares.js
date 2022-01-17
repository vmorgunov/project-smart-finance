const jwt = require('jsonwebtoken');
const { NotAuthorizedError } = require('../helpers/errors');
const { User } = require('../models');


const authMiddleware = async (req, res, next) => {
  try {
  const { authorization } = req.headers; 
  
    if (!authorization) {
      next(
        new NotAuthorizedError(
          'Please, provide a token in request authorization header',
        ),
      );
    }
 const [tokenType, tokenShort] = authorization.split(' ');

    if (tokenType !== 'Bearer') {
      next(new NotAuthorizedError('Invalid token'));
    }

    if (!tokenShort) {
      next(new NotAuthorizedError('Please, provide a token'));
    }

    const verify = jwt.verify(tokenShort, process.env.ACCES_TOKEN_SECRET);
  
    if (!verify) {
      next(new NotAuthorizedError('Invalid token'));
    }

    const user = await User.findOne({ _id: verify._id })
    if (!user || !user.tokenShort) {
      next(new NotAuthorizedError('Not authorized'));
    }

    req.token = tokenShort;
    req.user = user;
    next();
  } catch (error) {
    next(new NotAuthorizedError('uncnown'))
  }
};

module.exports = {
  authMiddleware,
};
