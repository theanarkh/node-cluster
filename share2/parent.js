const childProcess = require('child_process');
const net = require('net');
const workers = [];
const workerNum = 10;
const server = net.createServer(() => {
	console.log('master receive connection');
})
server.listen(11111);
for (let i = 0; i < workerNum; i++) {
	const worker = childProcess.fork('child.js', {env: {index: i}});
	workers.push(worker);
	worker.send(null, server);
}
// 防止文件描述符泄漏
server.close()