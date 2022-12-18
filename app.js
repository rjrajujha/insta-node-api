const express = require('express');
const usersRoute = require('./routes/user');
const homePage = require('./routes/homepage');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use('/', homePage);
app.use("/api/users", usersRoute);

module.exports = app;