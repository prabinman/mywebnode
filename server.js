var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();


// set the view engine to ejs
app.use('/public', express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs');

// use res.render to load up an ejsview file

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
app.get('/', function(req, res) {
    res.render('pages/about');
});

app.listen(3000, function() {
    console.log("Server Started at Port 3000...");
});