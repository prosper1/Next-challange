const sqlite3 = require('sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, 'mydatabase.db'); // Change to your desired path

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error connecting to SQLite database:', err);
  } else {
    console.log('Connected to SQLite database');
  }
});

module.exports = db;

