const Transaction = require('../models/transaction');
const paymentGateway = require('../utils/paymentGateway');


// Fetch all transactions
exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    return res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
};

// Fetch transactions by school
exports.getTransactionsBySchool = async (req, res) => {
  try {
    const { school_id } = req.params;
    const transactions = await Transaction.find({ school_id });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch school transactions' });
  }
};

// Check transaction status
exports.checkTransactionStatus = async (req, res) => {
  try {
    const { custom_order_id } = req.query;
    const transaction = await Transaction.findOne({ custom_order_id: custom_order_id });
    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }
    res.json({ status: transaction.status });
  } catch (err) {
    res.status(500).json({ error: 'Failed to check transaction status' });
  }
};

// Webhook for status updates
exports.webhookUpdate = async (req, res) => {
  try {
    const { order_info } = req.body;
    const { order_id, status } = order_info;

    await Transaction.findOneAndUpdate(
      { collect_id: order_id },
      { status },
      { new: true }
    );

    res.json({ message: 'Transaction status updated' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update transaction status' });
  }
};

// Manual status update
exports.manualUpdate = async (req, res) => {
  try {
    const { collect_id, status } = req.body;
    const transaction = await Transaction.findOneAndUpdate(
      { collect_id },
      { status },
      { new: true }
    );

    res.json(transaction);
  } catch (err) {
    res.status(500).json({ error: 'Failed to manually update status' });
  }
};



exports.createTransaction = async (req, res) => {
  try {
    const { school_id, order_amount, gateway } = req.body;

    const transaction = await Transaction.create({
      school_id,
      order_amount,
      gateway,
      status: 'PENDING',
      custom_order_id: `order_${Date.now()}`,
    });

    const paymentLink = await paymentGateway.createPayment(transaction);

    res.json({ paymentLink });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create transaction' });
  }
};