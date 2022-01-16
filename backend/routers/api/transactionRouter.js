const express = require('express');
const router = express.Router();

const { TransactionController } = require('../../contollers');
const { asyncWrapper } = require('../../helpers');

const { authMiddleware } = require('../../middlewares');

const {
  addTransctionValidation,
} = require('../../middlewares/validationMiddlewares');


router.get(
  '/:year/:month/:type',
  authMiddleware,
  asyncWrapper(TransactionController.getMonthTransactions),
);

router.get(
  '/:year/:month/:type/sum',
  asyncWrapper(TransactionController.getMonthTransactionsSum),
);

router.post(
  '/:type',
  // addTransactionValidation,
  asyncWrapper(TransactionController.addTransaction),
);


module.exports = router;
