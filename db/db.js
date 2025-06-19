const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'db',      // use 'db' because of docker-compose service name
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'user_auth'
});

db.connect((err) => {
  if (err) {
    console.error('DB Connection Failed:', err);
    throw err;
  }
  console.log('Connected to MySQL DB');
});

module.exports = db;
