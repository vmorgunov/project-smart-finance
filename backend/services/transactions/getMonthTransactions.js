const { NotFoundError } = require('../../helpers');
const { Transaction } = require('../../models');

const getMonthTransactions = async ({ year, month, type }) => {
  // const { _id } = req.user;
  const searchData = type === 'all' ? { year, month } : { year, month, type };

  const result = await Transaction.find(searchData);

  if (!result[0]) {
    throw new NotFoundError(
      'No information. Try another month, year or transaction type.',
    );
  }

  return result;
};

module.exports = getMonthTransactions;
