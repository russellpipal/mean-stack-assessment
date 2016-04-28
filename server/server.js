var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var heroRouter = require('./routes/heroRouter');

var app = express();
app.use(express.static('server/public'));
app.use(bodyParser.json());

var mongoURI = 'mongodb://localhost/mean-stack-assessment';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err){
  console.log(err);
});

MongoDB.once('open', function(){
  console.log('Mongo connection opened.');
});

app.use('/', index);
app.use('/hero', heroRouter);

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port, 'Press ctrl + C to exit');
});
