const moment = require('moment');

/// Middleware
const logger = (req, res, next) => {
	console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()} `);
	next(); //  go to next middleware function in the stack
};

module.exports = logger;