// var express = require('express');
// var app = express();

// const PORT = process.env.PORT || 3000;

// app.use(express.static(__dirname + '/../dist'));

// app.listen(PORT, function() {
//   console.log('listening on port 3000!');
// });





const http = require('http');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('dist'));
app.set('port', PORT);

const server = http.createServer(app);

server.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}...`)
});