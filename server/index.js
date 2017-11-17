var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../dist'));

app.listen(PORT, function() {
  console.log('listening on port 3000!');
});