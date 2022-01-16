const { NotFoundError } = require('../../helpers');
const { Transaction } = require('../../models');

const getMonthTransactions = async ({ year, month, type }) => {
  // const { _id } = req.user;

  //
  const searchData = type === 'all' ? { year, month } : { year, month, type };

  const transactions = await Transaction.find(searchData);
  let total = 0;

  if (!transactions[0]) {
    throw new NotFoundError(
      'No information. Try another month, year or transaction type.',
    );
  }

  if (transactions.length === 1) {
    total = transactions[0].sum;
  } else {
    total = transactions.reduce((a, b) => a.sum + b.sum);
  }

  return type === 'all' ? { transactions } : { transactions, total };
};

module.exports = getMonthTransactions;
