const express = require('express');
const app = express();
const cors = require('cors');
const userData = require('./routes/user');

app.get('/', (req, res) => {
  res.send("Page");
  res.end();
})

// app.use(cors())
// app.use(express.json());
// app.use(express.urlencoded())
// app.use("/api/users",userData);

app.get('/*', (req, res) => {
  res.send('Page Not Found');
  res.end();
})

module.exports = app;