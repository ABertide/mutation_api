const express = require('express');

const app = express();

app.use('/api/mutation', (req, res, next) => {
    let json = require('./data/data.json');
    res.status(200).json(json);
});

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = app;
