const BorrowRequest = require('../models/BorrowRequest');
const Book = require('../models/Book');
const Favorite = require('../models/Favorite');

module.exports = {
  // Borrow a book
  async borrowBook(req, res) {
    try {
      const { bookId } = req.body;
      const userId = req.user.id; // Retrieved from middleware

      const borrowRequest = await BorrowRequest.create({ userId, bookId, status: 'pending' });

      res.status(201).json({ message: 'Borrow request submitted', borrowRequest });
    } catch (error) {
      res.status(500).json({ message: 'Error borrowing book', error });
    }
  },

  // View borrow requests
  async getBorrowRequests(req, res) {
    try {
      const userId = req.user.id;

      const requests = await BorrowRequest.findAll({ where: { userId } });
      res.json(requests);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching borrow requests', error });
    }
  },

  // Add a book to favorites
  async addToFavorites(req, res) {
    try {
      const { bookId } = req.body;
      const userId = req.user.id;

      const favorite = await Favorite.create({ userId, bookId });
      res.status(201).json({ message: 'Book added to favorites', favorite });
    } catch (error) {
      res.status(500).json({ message: 'Error adding to favorites', error });
    }
  },

  // View favorite books
  async getFavorites(req, res) {
    try {
      const userId = req.user.id;

      const favorites = await Favorite.findAll({ where: { userId }, include: Book });
      res.json(favorites);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching favorites', error });
    }
  },
};
