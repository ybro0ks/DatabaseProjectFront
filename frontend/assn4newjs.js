// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// Create an Express app
const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Create a MySQL connection
const con = mysql.createConnection({
    host: "localhost",
    user: "nodeuser",
    password: "nodeuser",
    database: "users"
});

// Connect to the database
con.connect(err => {
    if (err) throw err;
    console.log("Connected to the database.");
});

// Handle POST requests to /insertData
app.post('/insertData', (req, res) => {
    // Extract relevant fields from the request body
    const { title, firstname, surname, phone, email } = req.body;

    // Construct the SQL query for insertion
    const sql = 'INSERT INTO personalinformation (title, firstname, surname, phone, email) VALUES (?, ?, ?, ?, ?)';
    con.query(sql, [title, firstname, surname, phone, email], (err, result) => {
        if (err) {
            console.error("Error inserting data:", err);
            res.status(500).send('Error inserting data');
            return;
        }
        console.log("Data inserted successfully", result);
        res.send({ message: "Data inserted successfully", insertId: result.insertId });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

function insertDataIntoDatabase() {
    const form = document.getElementById('personalInfoForm');
    const formData = new FormData(form);

    fetch('/insertData', { // Endpoint where you want to send the form data
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Data submitted successfully');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Failed to submit data');
    });
}
