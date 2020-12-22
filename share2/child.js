const net = require('net');
process.on('message', (message, server) => {
	server.on('connection', () => {
		console.log(process.env.index, 'receive connection');
	})
});