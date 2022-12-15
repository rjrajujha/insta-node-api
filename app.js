const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('This Page is under construction');
  res.end();
})

app.get('/*', (req, res) => {
    res.send('Page Not Found');
    res.end();
  })

module.exports = app;