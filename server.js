var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// use express static
// allowing all files in public to be served to a client (browser)
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/calc', function(req, res) {
  console.log('in calc post route, req.body = ', req.body);

  var x = parseFloat(req.body.x);
  var y = parseFloat(req.body.y);
  var operator = req.body.type; // add, sub, etc

  var finalAnswer;

  switch (operator) {
    case 'add':
      finalAnswer = x + y;
      break;
    case 'sub':
      finalAnswer = x - y;
      break;
    case 'mult':
      finalAnswer = x * y;
      break;
    case 'div':
      finalAnswer = x / y;
      break;
    default:
      console.log('error, i do not know this operator');
  }

  var respObj = { answer: finalAnswer};

  res.send(respObj);
});

app.listen(3002, function() {
  console.log('listening on port 3002!!');
});
