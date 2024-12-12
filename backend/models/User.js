const db = require('../config/db');

class User {
  static async create({ name, email, password, role }) {
    const query = `
      INSERT INTO users (name, email, password, role) 
      VALUES ($1, $2, $3, $4) RETURNING *`;
    const values = [name, email, password, role];
    return db.query(query, values);
  }

  static async findByEmail(email) {
    const query = `SELECT * FROM users WHERE email = $1`;
    return db.query(query, [email]);
  }

  static async updateProfile(userId, name, profilePicture) {
    const query = `
      UPDATE users
      SET name = $1, profile_picture = $2, last_name_update = CURRENT_TIMESTAMP, last_picture_update = CURRENT_TIMESTAMP
      WHERE id = $3 RETURNING *`;
    return db.query(query, [name, profilePicture, userId]);
  }

  static async logActivity(userId, action, tableName, columnName) {
    const query = `
      INSERT INTO activity_logs (user_id, action, table_name, column_name, performed_at)
      VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP)`;
    return db.query(query, [userId, action, tableName, columnName]);
  }
}

module.exports = User;
