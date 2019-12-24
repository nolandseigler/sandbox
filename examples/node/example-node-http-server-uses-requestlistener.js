const http = require('http');
let {requestListener} = require('./example-node-http-requestlistener');
const PORT = process.env.PORT || 4001;
const server = http.createServer(requestListener);
server.listen(PORT);