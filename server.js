var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.Port || 3100;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

//Load Bootstrap CSS
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist/fonts'));

//Load Bootstarp JS
app.use('/bs', express.static(__dirname + '/node_modules/bootstrap/dist/js'));

//Load Jquery
app.use('/jq', express.static(__dirname + '/node_modules/jquery/dist'));

//Load AngularJS
app.use('/ng', express.static(__dirname + '/node_modules/angular'));

//Load AngularJS Routes
app.use('/ngr', express.static(__dirname + '/node_modules/angular-route'));


mongoose.connect('mongodb://localhost/mercury');
mongoose.connection.once('open', function(){
    
    var trailers = require('./modelSchema/trailerSchema.js');
    
    //Get List from dB    
    app.get('/trailers', function(req, res){
        trailers.find(function(err, docs){
            if(err) {
                console.log(err);
            }
            res.json(docs);
        })
    });
    
    app.post('/trailers', function(req, res){
        console.log(req.body);
        
        var trailer = new trailers();
        
        trailer.title = req.body.title;
        trailer.url = req.body.url;
        
        trailer.save(function(err) {
            res.json();
        });
        
    });
    
   
});



app.set('port', port);

app.listen(app.get('port'), function(){
    console.log('listening on port ' + port);
});


