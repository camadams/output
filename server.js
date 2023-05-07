const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.use('/public', express.static('./public/'));

// var pros = ['pathfinding', 'waves', 'asdf'];
// const PROJECT_FOLDER = '/public/projects/';

// for (const pro in pros) {
//   app.use(express.static(__dirname + PROJECT_FOLDER + pro));
//   app.use('.' + PROJECT_FOLDER + pro, express.static(PROJECT_FOLDER + pro));
//   app.get('/' + pro, function (req, res) {
//     res.sendFile(path.join(__dirname, PROJECT_FOLDER + pro + '/' + pro + '.html'));
//   });
// }

app.use(express.static(__dirname + '/public/projects/pathfinding'));
app.use('./public/projects/pathfinding', express.static('/public/projects/pathfinding/'));

app.use(express.static(__dirname + '/public/projects/waves'));
app.use('./public/projects/waves', express.static('/public/projects/waves/'));

// --------- GET requests -------------
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/bio', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/bio.html'));
});

app.get('/pathfinding', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/projects/pathfinding/pathfinding.html'));
});

app.get('/waves', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/projects/waves/waves.html'));
});

// app.get('/asdf', function (req, res) {
//   res.sendFile(path.join(__dirname, '/public/projects/asdf/asdf.html'));
// });

// --------- GET requests end ----------

app.listen(port);
console.log('Server started at http://localhost:' + port);
