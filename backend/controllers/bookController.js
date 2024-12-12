const Book = require('../models/Book');

exports.getBooks = async (req, res) => {
  try {
    const { rows } = await Book.getAllBooks();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
};

exports.borrowBook = async (req, res) => {
  try {
    await Book.borrowBook(req.user.id, req.params.bookId);
    res.json({ message: 'Borrow request sent' });
  } catch (error) {
    res.status(500).json({ error: 'Borrow request failed' });
  }
};

exports.addToFavorites = async (req, res) => {
  try {
    await Book.addToFavorites(req.user.id, req.params.bookId);
    res.json({ message: 'Book added to favorites' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add book to favorites' });
  }
};

exports.getFavorites = async (req, res) => {
  try {
    const { rows } = await Book.getFavorites(req.user.id);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch favorite books' });
  }
};
