const { NotFoundError } = require('../../helpers');
const { Transaction } = require('../../models');

const addTransaction = async body => {
  const result = await Transaction.create(body);
  return result;
};

module.exports = addTransaction;
