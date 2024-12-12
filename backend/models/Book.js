const db = require('../config/db');

class Book {
  static async getAllBooks() {
    return db.query('SELECT * FROM books');
  }

  static async borrowBook(userId, bookId) {
    const query = `
      INSERT INTO borrow_requests (student_id, book_id, requested_at) 
      VALUES ($1, $2, CURRENT_TIMESTAMP)`;
    return db.query(query, [userId, bookId]);
  }

  static async addToFavorites(userId, bookId) {
    const query = `
      INSERT INTO favorites (student_id, book_id, added_at) 
      VALUES ($1, $2, CURRENT_TIMESTAMP) ON CONFLICT DO NOTHING`;
    return db.query(query, [userId, bookId]);
  }

  static async getFavorites(userId) {
    const query = `
      SELECT books.id, books.title, books.author, books.description
      FROM favorites
      JOIN books ON favorites.book_id = books.id
      WHERE favorites.student_id = $1`;
    return db.query(query, [userId]);
  }
}

module.exports = Book;
