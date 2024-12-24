const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

router.get('/transactions', transactionController.getAllTransactions);
router.get('/transactions/school/:school_id', transactionController.getTransactionsBySchool);
router.get('/transaction/status', transactionController.checkTransactionStatus);
router.post('/transaction/webhook', transactionController.webhookUpdate);
router.post('/transaction/manual-update', transactionController.manualUpdate);
router.post('/transaction/create', transactionController.createTransaction);


module.exports = router;
