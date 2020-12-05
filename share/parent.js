const childProcess = require('child_process');
const net = require('net');
const workers = [];
const workerNum = 10	;
const handle = net._createServerHandle('127.0.0.1', 11111, 4);

for (let i = 0; i < workerNum; i++) {
	const worker = childProcess.fork('child.js', {env: {index: i}});
	workers.push(worker);
	worker.send(null ,handle);
}
