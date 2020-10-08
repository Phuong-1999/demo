var express = require('express')
var app = express()
var fs = require('fs');

var publicDir = require('path').join(__dirname, '/public');
app.use(express.static(publicDir));

const engines = require('consolidate');
app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

app.get('/', function(req,res){
    let currentDate = new Date();
    res.render('index', {model:currentDate});
});

app.get('/Login', function(req, res){
    res.render('login');
});

app.get('/Insert', function(req, res){
    res.render('insert');
});

app.get('/Update', function(req, res){
    res.render('update');
});

app.get('/Delete', function(req, res){
    res.render('delete');
});

app.get('/Index', function(req, res){
    res.render('index');
});

// app.use(express.static(path.join('assets/css', 'style')));
app.use('/assets/', express.static('assets'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}))

app.listen(5000)