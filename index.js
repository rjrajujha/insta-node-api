require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');
const port = process.env.PORT || 8080;
const dbURL = process.env.MONGODB_URI || 'mongodb+srv://root:PassWord@mycloudcluster.glkpt0w.mongodb.net/myProjectDB';

mongoose.connect(dbURL, () => { console.log("Database connection successfull") });

app.listen(port, () => {
  console.log(`Server is up @ port ${port}`)
});