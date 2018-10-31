var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
    res.contentType("application/json");
    res.sendStatus(200);
    res.end();
});

app.listen(3000, function(){})