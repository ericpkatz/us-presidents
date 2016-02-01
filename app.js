//ok let's start..
var express = require('express');
var path = require('path');
var swig = require('swig');
var bodyParser = require('body-parser');
swig.setDefaults({ cache: false});

var app = express();

app.use(express.static(path.join(__dirname, 'node_modules')));
//below is enabled to handle post data
app.use(bodyParser.urlencoded({extended: false}));

app.engine('html', swig.renderFile);

app.set('view engine', 'html');


app.get('/', function(req, res){
   res.render('index');
});

app.use('/presidents', require('./routes/presidents'));

var port = process.env.PORT || 8080;
var listener = app.listen(port, function(){
   console.log('server has started on port ' + port);
});

listener.on('error', function(err){
   console.log('there has been an error ' + err); 
});