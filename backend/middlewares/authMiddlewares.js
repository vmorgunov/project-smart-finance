const jwt = require('jsonwebtoken');
const { NotAuthorizedError } = require('../helpers/errors');
const { User } = require('../models');

const { ACCES_TOKEN_SECRET } = process.env;

const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  const [tokenType, tokenShort] = authorization.split(' ');

  try {
    if (!authorization) {
      next(
        new NotAuthorizedError(
          'Please, provide a token in request authorization header',
        ),
      );
    }

    if (tokenType !== 'Bearer') {
      next(new NotAuthorizedError('Invalid token'));
    }
    if (!tokenShort) {
      next(new NotAuthorizedError('Please, provide a token'));
    }

    const { id } = jwt.verify(tokenShort, ACCES_TOKEN_SECRET);
    if (!id) {
      next(new NotAuthorizedError('Invalid token'));
    }

    const user = await User.findById(id);
    if (!user || !user.tokenShort) {
      next(new NotAuthorizedError('Not authorized'));
    }

    req.token = tokenShort;
    req.user = user;
    next();
  } catch (error) {
    if (error.message === 'Invalid sugnature') {
      error.status = 401;
    }
    next(error);
  }
};

module.exports = {
  authMiddleware,
};
