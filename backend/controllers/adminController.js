const ActivityLog = require('../models/ActivityLog');
const Book = require('../models/Book');
const User = require('../models/User');

module.exports = {
  // Get activity logs with optional filtering by month and year
  async getActivityLogs(req, res) {
    try {
      const { month, year } = req.query;

      const logs = await ActivityLog.findAll({
        where: {
          ...(month && { month }),
          ...(year && { year }),
        },
      });

      res.json(logs);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching activity logs', error });
    }
  },

  // Create a new book entry
  async createBook(req, res) {
    try {
      const { title, author, category, availableCopies } = req.body;

      const newBook = await Book.create({ title, author, category, availableCopies });
      res.status(201).json(newBook);
    } catch (error) {
      res.status(500).json({ message: 'Error creating book', error });
    }
  },

  // Update a book entry
  async updateBook(req, res) {
    try {
      const { id } = req.params;
      const { title, author, category, availableCopies } = req.body;

      await Book.update({ title, author, category, availableCopies }, { where: { id } });
      res.json({ message: 'Book updated successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error updating book', error });
    }
  },

  // Delete a book entry
  async deleteBook(req, res) {
    try {
      const { id } = req.params;

      await Book.destroy({ where: { id } });
      res.json({ message: 'Book deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting book', error });
    }
  },
};
