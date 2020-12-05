const net = require('net');
for (let i = 0; i < 50; i++) {
    net.connect({port: 11111});
}
