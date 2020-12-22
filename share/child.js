const net = require('net');
process.on('message', (message, handle) => {
	net.createServer(() => {
		console.log(process.env.index, 'receive connection');
	}).listen({handle});
});
