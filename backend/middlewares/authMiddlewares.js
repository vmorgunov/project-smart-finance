const jwt = require('jsonwebtoken')
const { NotAuthorizedError } = require('../helpers/errors')
const { User } = require('../models')

const authMiddleware = async(req, res, next) => {
  try {
    const { authorization } = req.headers

    if (!authorization) {
      next(new NotAuthorizedError('Please, provide a token in request authorization header'))
    }
  
    const [tokenType, shortToken] = await authorization.split(' ')
    if (tokenType !== 'Bearer') {
      next(new NotAuthorizedError('Invalid token'))
    }
    if (!shortToken) {
      next(new NotAuthorizedError('Please, provide a token'))
    }

    const verify = jwt.verify(shortToken, process.env.ACCES_TOKEN_SECRET)
    if (!verify) {
      next(new NotAuthorizedError('Invalid token'))
    }

    const user = await User.findOne({ _id: verify._id })

    if (!user || !user.shortToken) {
      next(new NotAuthorizedError('Not authorized'))
    }

    req.token = shortToken
    req.user = user
    next()
  } catch (err) {
    next(new NotAuthorizedError('Invalid token'))
  }
}

module.exports = {
  authMiddleware
}