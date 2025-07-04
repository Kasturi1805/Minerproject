const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');
const router = require('express').Router();

const authMiddleware = require('../middleware/auth'); // adjust path if needed

router
    .post('/add-income', authMiddleware, addIncome)
    .get('/get-incomes', authMiddleware, getIncomes)
    .delete('/delete-income/:id', authMiddleware, deleteIncome)
    .post('/add-expense', authMiddleware, addExpense)
    .get('/get-expenses', authMiddleware, getExpense)
    .delete('/delete-expense/:id', authMiddleware, deleteExpense)

module.exports = router;
