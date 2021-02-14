const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    console.log("inside People");
    res.send('Inside people base');
});

route.get('/example', (req, res) => {
    console.log("inside People");
    res.send('Inside people router');
});


module.exports = route;