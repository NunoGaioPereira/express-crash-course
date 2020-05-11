const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

// Init express
const app = express();

// Init middleware
// app.use(logger);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members APi Routes
app.use('/api/members', require('./route/api/members'));

const PORT = process.env.PORT || 5000;

// Run server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));