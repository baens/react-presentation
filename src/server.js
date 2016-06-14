var path = require('path');
var express = require('express');

var app = express();

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, './index.html'));
});

app.get('/client.js', function(request, response) {
  response.sendFile(path.join(__dirname,'./client/index.js'));
});

app.listen(8080);
