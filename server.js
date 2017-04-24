var express = require('express');
var bodyParser = require('body-parser');
var calcMod = require('./modules/calculate');

var app = express();

// use express static
// allowing all files in public to be served to a client (browser)
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/calc', function(req, res) {
  console.log('in calc post route, req.body = ', req.body);

  var respObj = { answer: calcMod(req.body)};

  res.send(respObj);
});

app.listen(3002, function() {
  console.log('listening on port 3002!!');
});
