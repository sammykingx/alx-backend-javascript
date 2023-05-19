const express = require('express');

const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  console.log(`${req.params.id}`)
  res.end(`Payment methods for cart ${req.params.id}`);
})

app.listen(port, console.log(`API available on localhost port ${port}`));

module.exports = [app, port];
