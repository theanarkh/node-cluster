const handle = require('../handle');
process.on('message', (message, client) => {
	console.log('receive connection from master');
});