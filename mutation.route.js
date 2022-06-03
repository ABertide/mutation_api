const express = require('express');
const router = express.Router();

let json = require('./data/data.json');
console.log(json);

router.get('/mutation', (req, res) => {
    console.log(json);
    res.json(json);
});

module.exports = router;
