'use strict';

require('dotenv').config();
const server = require('./src/server.js');

const PORT = process.env.PORT || 3030

server.start(PORT);