const express = require('express');
const router = express.Router();

const { TransactionController } = require('../../contollers');
const { asyncWrapper } = require('../../helpers');

const { authMiddleware } = require('../../middlewares');

router.get(
  '/:year/:month/:type',
  authMiddleware,
  asyncWrapper(TransactionController.getMonthTransactions),
);

router.post(
  '/:type',
  authMiddleware,
  asyncWrapper(TransactionController.addTransaction),
);

module.exports = router;
