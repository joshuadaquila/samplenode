// index.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// MySQL connection
const pool = mysql.createPool({
  host: '34.70.44.155',
  user: 'barkotafaq',
  password: 'vmJKx0teRd',
  database: 'barkotafaq',
  port: 3306
});

// Example endpoint
app.get('/data', (req, res) => {
  pool.query('SELECT * FROM faqcategories', (error, results) => {
    if (error) return res.status(500).json({ error });
    res.json(results);
    console.log(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
