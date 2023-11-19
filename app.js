const http = require('http');

const routes = require('./routes'); //it is a local file not global

const server = http.createServer(routes);

server.listen(4000);
