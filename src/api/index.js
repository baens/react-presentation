var express = require('express');
var cors = require('cors');

var app = express();

app.use(cors());

app.get('/', function(request, response){
  response.send(JSON.stringify({number:Math.floor(Math.random() * 10)}));
});

app.listen(8081);