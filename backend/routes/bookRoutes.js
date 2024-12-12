const express = require('express');
const { getBooks, borrowBook, addToFavorites, getFavorites } = require('../controllers/bookController');
const { authenticateUser } = require('../middleware/auth');
const router = express.Router();

router.get('/', getBooks);
router.post('/borrow/:bookId', authenticateUser, borrowBook);
router.post('/favorites/add/:bookId', authenticateUser, addToFavorites);
router.get('/favorites', authenticateUser, getFavorites);

module.exports = router;
