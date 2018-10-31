var express = require('express');
var app = express();

app.get('/html', function(req, res){
    res.contentType("text/html");
    res.send("<html><head></head><body><h1>Hello world!</h1></body></html>");
});

app.get('/json', function(req, res){
    res.contentType('application/json');
    res.json({firstname: 'John', lastname : 'Smith'});  
});

app.get('/toronto*team', function(req, res){
    var team = (req.url.split('/toronto'));
    res.send('Welcome ' + team);
});

app.listen(3000, '127.0.0.1');
