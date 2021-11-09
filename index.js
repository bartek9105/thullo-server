require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const dbConnection = require('./dbConnection');

dbConnection();

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});