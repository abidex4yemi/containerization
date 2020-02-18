const express = requie('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hi, there');
});

app.listen(2020, console.log('Listening on port 8080'));
