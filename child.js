const net = require('net');
process.on('message', (message, handle) => {
	if (handle instanceof net.Socket) {
		console.log(process.env.index, 'receive connection from master');
	} else if (handle instanceof net.Server){
		handle.on('connection', () => {
			console.log(process.env.index, 'receive connection by self');
		})
	}
});