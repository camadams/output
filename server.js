const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.use('/public', express.static('./public/'));

app.use(express.static(__dirname + '/projects/pathfinding'));
app.use('/projects/pathfinding', express.static('./projects/pathfinding/'));

app.use(express.static(__dirname + '/projects/waves'));
app.use('/projects/waves', express.static('./projects/waves/'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/bio', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/bio.html'));
});

app.get('/pathfinding', function (req, res) {
  res.sendFile(path.join(__dirname, '/projects/pathfinding/pathfinding.html'));
});

app.get('/waves', function (req, res) {
  res.sendFile(path.join(__dirname, '/projects/waves/waves.html'));
});

app.get('/asdf', function (req, res) {
  res.sendFile(path.join(__dirname, '/asdf.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
