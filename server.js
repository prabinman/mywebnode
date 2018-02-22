var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// var owlCarousel = require('owl.carousel');

var app = express();

// set the view engine to ejs
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);  // to render html files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/public/'));

// use res.render to load up an ejsview file
// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

// awards page
app.get('/awards', function(req, res) {
    res.render('pages/awards');
});

// testimonials page
app.get('/testimonials', function(req, res) {
    res.render('pages/testimonials');
});

// testimonials page
app.get('/currentjob', function(req, res) {
    res.render('pages/currentjob');
});

// contact page
app.get('/contact', function(req, res) {
    res.render('pages/contact');
});

app.listen(3000, function() {
    console.log("Server Started at Port 3000...");
});