const { NotFoundError } = require('../../helpers');
const { Transaction } = require('../../models');

const getMonthTransactions = async data => {
  // const { _id } = req.user;

  const result = await Transaction.find(data);

  console.log(result[0]);

  if (!result[0]) {
    throw new NotFoundError(
      'No information. Try another month, year or transaction type.',
    );
  }

  return result;
};

module.exports = getMonthTransactions;
