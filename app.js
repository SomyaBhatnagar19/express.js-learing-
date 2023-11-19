const http = require('http');

const routes = require('./routes'); //it is a local file not global
console.log(routes.someText);
// const server = http.createServer(routes);
const server = http.createServer(routes.handler);
server.listen(4000);
