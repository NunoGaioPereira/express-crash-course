const express = require('express');
const path = require('path');
const members = require('./Members');

// Init express
const app = express();

// Route
// app.get('/', (req, res) => {
// 	res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// Gets all members
app.get('/api/members', (req, res) => res.json(members));


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

// Run server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));