const { NotFoundError } = require('../../helpers');
const { Transaction } = require('../../models');

const getMonthTransactionsSum = async ({ year, month, type }) => {
  // const { _id } = req.user;
  const result = await Transaction.find({ year, month, type });

  if (!result[0]) {
    throw new NotFoundError(
      'No information. Try another month, year or transaction type.',
    );
  }
  if (result.length === 1) {
    return result[0].sum;
  }

  return result.reduce((a, b) => ({ sum: a.sum + b.sum })).sum;
};

module.exports = getMonthTransactionsSum;
