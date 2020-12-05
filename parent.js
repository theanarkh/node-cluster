const childProcess = require('child_process');
const net = require('net');
const workers = [];
const workerNum = 1;

for (let i = 0; i < workerNum; i++) {
	workers.push(childProcess.fork('child.js', {env: {index: i}}));
}

const server = net.createServer((client) => {
	for (let i = 0; i < workerNum; i++) {
		workers[~~(Math.random() * workerNum)].send(null, client);
	}
});
server.listen(11111);
for (let i = 0; i < workerNum; i++) {
	workers[~~(Math.random() * workerNum)].send(null, server);
}
