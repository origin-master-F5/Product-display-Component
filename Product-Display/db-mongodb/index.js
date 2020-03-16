const mongoose = require('mongoose');
const URI = 'mongodb://localhost/bestbuy';

mongoose.connect(URI, {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose BB connected');
});

module.exports = db;