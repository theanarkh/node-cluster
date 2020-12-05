const net = require('net');
process.on('message', (message, client) => {
	console.log('receive connection from master');
});