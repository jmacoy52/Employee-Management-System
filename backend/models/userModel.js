const db = require('../config/db');

class UserModel {
  static registerUser(userData, callback) {
    const query = 'INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)';
    const values = [userData.username, userData.email, userData.password, userData.role ||'HR'];
    db.query(query, values, callback);
  }

 // Inside the UserModel class
static findUserByEmail(email) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM users WHERE email = ?';

    // Execute the SQL query to check if the email exists
    db.query(query, [email], (err, results) => {
      if (err) {     
        return reject(err);  // If there's a DB error, reject the Promise
      }
      if (results.length > 0) {  
        return resolve(results[0]);  // If a user with that email is found, resolve with the user object
      }
      return resolve(null);   // If no user is found, resolve with null
    });
  });
}
}

module.exports = UserModel;
