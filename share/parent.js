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
// 防止文件描述符泄漏，不过如果子进程挂了，主进程再fork的时候，主进程就无法再传递该文件描述符了
handle.close();
