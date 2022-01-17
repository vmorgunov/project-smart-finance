const  AppError  = require('./errors');

const asyncWrapper = (controller) => {
  return async(req, res, next) => {
    try {
      await controller(req, res,next)
    } catch (error) {
      next(error)
    }
    
  }
};

const errorHandler = (error, req, res, next) => {
  if (error instanceof AppError) {
    return res.status(error.status).json({ message: error.message })
  }
  
 return res.status(500).json({ message: error.message })
};

module.exports = {
  asyncWrapper,
  errorHandler
};