'use strict'

var express = require ('express');
var path = require ('path');
var projects = require('../projects.json');

var app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use('/scripts', express.static(path.join(__dirname, '../node_modules')));
app.use('/public', express.static(path.join(__dirname, '../compiled')));

app.get("/api/projects", function(req, res) {
  var sortedProjects = projects.projects.sort(function(a, b) {
    return b.added - a.added;
  })

  res.send(sortedProjects);
})

app.listen(process.env.PORT || 3000, function() {
  console.log('Server started, listening on port:', 3000);
})