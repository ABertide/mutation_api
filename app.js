const express = require('express');

const app = express();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    next();
});
app.use('/api/mutation', (req, res, next) => {
    let json = require('./data/data.json');
    res.json(json);
});

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = app;
