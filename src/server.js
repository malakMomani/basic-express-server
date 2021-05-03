'use strict';

const express = require('express');
const notFoundHandler = require('../src/error-handlers/404.js');
const errorHandler = require('../src/error-handlers/500.js');
const logger = require('../src/middleware/logger.js');
const validator = require('./middleware/validator.js');

const app = express();


app.use(logger);

// app.get('/', (req, res) => {
//     res.send('All Good');
// });

app.get('/person', validator, (req, res) => {
    // console.log(req.query.name);
    res.status(200).json({
        name: req.query.name
    });
});

app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port) {
    app.listen(port, () => console.log(`Listening to PORT ${port}`));
}

module.exports = {
    app,
    start
}