var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send("hello world");
});

app.listen(/*port*/3000, /*callback*/function () {
  console.log('Example app listening on port 3000!');
});