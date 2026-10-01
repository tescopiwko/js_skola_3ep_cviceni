const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.port;



app.use(express.static('html+css'));
app.get('/hello', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});