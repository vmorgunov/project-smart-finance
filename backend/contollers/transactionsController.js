
const {
  getMonthTransactions,
  getMonthTransactionsSum,
  addTransaction,
} = require('../services/transactions');

class TransactionController {
  constructor() {
    this.addTransaction = this.addTransaction.bind(this);
    // this.addIncome = this.addIncome.bind(this);
    this.deleteTransaction = this.deleteTransaction.bind(this);
    // this.oneMonthExpenses = this.oneMonthExpenses.bind(this);
    this.getMonthTransactionsSum = this.getMonthTransactionsSum.bind(this);
    this.getMonthTransactions = this.getMonthTransactions.bind(this);
  }

  async addTransaction(req, res, next) {
    const { _id } = req.user;

    const { type } = req.params;
    console.log('type', type);
    console.log('id', id);
    const result = await addTransaction({ type, id }, req.body);

    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        result,
      },
    });
  }

  // async addIncome(req, res, next) {}

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
