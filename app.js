const express = require('express');
const usersRoute = require('./routes/user');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use("/api/users", usersRoute);

module.exports = app;