const express = require('express');
const router = express.Router();
const members = require('../../Members');

// Gets all members
router.get('/', (req, res) => res.json(members));

// Get single member
router.get('/:id', (req, res) => {
	// res.send(req.params.id);
	const found = members.some(member => member.id === parseInt(req.params.id));
	if (found) {
		res.json(members.filter(member => member.id === parseInt(req.params.id)));
	}
	else {
		res.status(400).json({ msg: 'Member not found with id of ${req.params.id}' });
	}
});

module.exports = router;