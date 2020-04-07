const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hi, it is working....');
});

app.listen(2020, console.log('Listening on port 2020'));