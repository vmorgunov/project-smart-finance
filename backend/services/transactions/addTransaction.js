const { NotFoundError } = require('../../helpers');
const { Transaction } = require('../../models');

const addTransaction = async ({ type, id }, body) => {
  console.log('body', body);
  console.log('id', id);
  const result = await Transaction.create({ ...body, type, owner: id });

  return result;
};

module.exports = addTransaction;
