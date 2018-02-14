var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();


// set the view engine to ejs
app.use(express.static(__dirname + '/public/'));
app.set('view engine', 'ejs');

// use res.render to load up an ejsview file

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

// testimonials page
app.get('/testimonials', function(req, res) {
    res.render('pages/testimonials');
});

// contact page
app.get('/contact', function(req, res) {
    res.render('pages/contact');
});

app.listen(3000, function() {
    console.log("Server Started at Port 3000...");
});