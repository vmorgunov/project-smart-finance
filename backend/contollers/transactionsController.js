const {
  getMonthTransactions,
  getMonthTransactionsSum,
} = require('../services/transactions');

class TransactionController {
  constructor() {
    this.addExpenses = this.addExpenses.bind(this);
    this.addIncome = this.addIncome.bind(this);
    this.deleteTransaction = this.deleteTransaction.bind(this);
    // this.oneMonthExpenses = this.oneMonthExpenses.bind(this);
    this.getMonthTransactionsSum = this.getMonthTransactionsSum.bind(this);
    this.getMonthTransactions = this.getMonthTransactions.bind(this);
  }

  async addExpenses(req, res, next) {}

  async addIncome(req, res, next) {}

  async deleteTransaction(req, res, next) {}

  // async oneMonthExpenses(req, res, next) {

  // };

  async getMonthTransactionsSum(req, res, next) {
    // const { _id } = req.user;
    const { year, month, type } = req.params;
    const result = await getMonthTransactionsSum({ year, month, type });

    res.status(200).json({
      status: 'success',
      code: 200,
      total: result,
    });
  }

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
