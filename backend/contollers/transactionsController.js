const {
  getMonthTransactions,
  addTransaction,
} = require('../services/transactions');

class TransactionController {
  async addTransaction(req, res, next) {
    const { _id: id } = req.user;
    const { type } = req.params;
    const result = await addTransaction({ ...req.body, type, owner: id });

    res.status(201).json(result);
  }

  async deleteTransaction(req, res, next) {}

  async getMonthTransactions(req, res, next) {
    const { _id: id } = req.user;
    const { year, month, type } = req.params;
    const result = await getMonthTransactions({ year, month, type, id });

    res.status(200).json(result);
  }
}

module.exports = new TransactionController();
