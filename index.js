const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
const authentication = require('./routes/authentication')(router);
const blogs = require('./routes/blogs')(router);
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 8080;


mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
  if(err) {
    console.log('Neuspjesna konekcija na bazu:', err);
  }else {
    console.log('Konektovano na bazu:' + config.db);
  }
});


app.use(cors({
  origin: 'http://localhost:4200',

}));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
app.use('/authentication', authentication);
app.use('/blogs', blogs);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port, () => {
  console.log('Otvaram na portu ' + port);
});
