const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// MySQL connection using Unix socket
const pool = mysql.createPool({
  socketPath: '/cloudsql/barkota-1143:us-central1:barkota-db-testing', // Correct format
  user: 'barkotafaq',
  password: 'vmJKx0teRd',
  database: 'barkotafaq'
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
