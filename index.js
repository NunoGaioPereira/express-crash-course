const express = require('express');
const path = require('path');
const members = require('./Members');
const logger = require('./middleware/logger');

// Init express
const app = express();

// Init middleware
// app.use(logger);

// Gets all members
app.get('/api/members', (req, res) => res.json(members));

// Get single member
app.get('/api/members/:id', (req, res) => {
	// res.send(req.params.id);
	const found = members.some(member => member.id === parseInt(req.params.id));
	if (found) {
		res.json(members.filter(member => member.id === parseInt(req.params.id)));
	}
	else {
		res.status(400).json({ msg: 'Member not found with id of ${req.params.id}' });
	}
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

// Run server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));