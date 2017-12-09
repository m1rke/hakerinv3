const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');


mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
  if(err) {
    console.log('Neuspjesna konekcija na bazu:', err);
  }else {
    console.log('Konektovano na bazu:' + config.db);
  }
});

app.use(express.static(__dirname + '/client/dist/'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(8080, () => {
  console.log('Otvaram na portu 8080')
});
