const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const indexRouter = require('./routes/index.js')

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);

app.listen(port, () => {
  `http://localhost:${port}`
})