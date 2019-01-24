const express = require('express');
const path = require('path');
const morgan = require('morgan');

let server = express();
let port = 8080;

server.use(morgan('dev'))
server.use(express.static(path.join(__dirname, "./")))
server.listen(port, console.log(`server is run on port ${port}`))

module.exports = server;