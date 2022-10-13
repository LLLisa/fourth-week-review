const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

//dev middleware------------------------------------
app.use(express.json());
app.use(morgan('dev'));

//api routing middleware----------------------------
app.use('/api/users', require('./users'));
app.use('/api/schools', require('./schools'));

//serve react JS from /dist folder-----------------------------

app.use(express.static(path.join(__dirname, '../../public')));
app.use('/dist', express.static(path.join(__dirname, '../../dist')));

//catch all stray routes--------------------------------------
app.use('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../public/index.html'), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

//error handler---------------------------------
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).send(err.message);
});

module.exports = app;
