const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');

// Init express
const app = express();

// Init middleware
// app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Hopemage route
app.get('/', (req, res) => res.render('index', {
	title: 'Member App',
	members
	// members: members
}));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extender: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members APi Routes
app.use('/api/members', require('./route/api/members'));

const PORT = process.env.PORT || 5000;

// Run server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));