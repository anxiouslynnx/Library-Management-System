const express = require('express');
const router = express.Router();
const BorrowerController = require('../controllers/BorrowerController');
const authenticate = require('../middleware/authMiddleware');

// Protected routes for borrowers
router.use(authenticate);

router.post('/borrow', BorrowerController.borrowBook);
router.get('/borrow-requests', BorrowerController.getBorrowRequests);
router.post('/favorites', BorrowerController.addToFavorites);
router.get('/favorites', BorrowerController.getFavorites);

module.exports = router;
