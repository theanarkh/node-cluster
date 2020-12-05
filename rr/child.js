const handle = require('../handle');
process.on('message', (message, client) => {
    handle(client);
	console.log('receive connection from master');
});