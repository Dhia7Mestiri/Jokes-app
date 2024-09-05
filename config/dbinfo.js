const mysql = require('mysql');

// Create connection to MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',  // Default for XAMPP or Laragon
  database: 'jokesdb'
});

// Connect to the database
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Example: Insert a new joke
const joke = { question: 'Why did the chicken cross the road?', answer: 'To get to the other side', rating: 5 };
const sql = 'INSERT INTO jokes SET ?';
db.query(sql, joke, (err, result) => {
  if (err) throw err;
  console.log('Joke added:', result.insertId);
});