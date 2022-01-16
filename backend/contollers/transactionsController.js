const { getMonthTransactions } = require('../services/transactions');

class TransactionController {
  async addExpenses(req, res, next) {}

  async addIncome(req, res, next) {}

  async deleteTransaction(req, res, next) {}

  async getMonthTransactions(req, res, next) {
    // const { _id } = req.user;
    const { year, month, type } = req.params;
    const result = await getMonthTransactions({ year, month, type });

    res.status(200).json({
      status: 'success',
      code: 200,
      data: result,
    });
  }
}

module.exports = new TransactionController();
