var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(process.env.port || 8000);
console.log('the magic happens on port 8000');