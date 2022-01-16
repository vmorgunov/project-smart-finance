const express = require('express');
const router = express.Router();

const { TransactionController } = require('../../contollers');
const { asyncWrapper } = require('../../helpers');

router.get(
  '/:year/:month/:type',
  asyncWrapper(TransactionController.getMonthTransactions),
);

router.get(
  '/:year/:month/:type/sum',
  asyncWrapper(TransactionController.getMonthTransactionsSum),
);

module.exports = router;
