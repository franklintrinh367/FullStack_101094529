var express = require('express');
var moment = require('moment');

var app = express();


var requestTime = function(req, res, next){
    req.requestTime = Date.now();
    next();
}
app.use(requestTime);

app.get('/greet', function(req, res){
    console.log('GET received: ' + moment(req.requestTime).format("YYYY, M DD:hh:mm:ss:A"));
    res.send('hello world');
})

app.post('/greet', function(req, res){
    console.log('POST received: ' + moment(req.requestTime).format("YYYY, MM DD:hh:mm:ss:A"));
    res.send('Hi, wtf');
})

app.put('/greet', function(req, res){
    console.log('PUT received: ' + moment(req.requestTime).format("YYYY, MM DD:hh:mm:ss:A"));
    res.send('hello world');
})

app.delete('/greet', function(req, res){
    console.log('DELETE received: ' + moment(req.requestTime).format("YYYY, MM DD:hh:mm:ss:A"));
    res.send('hello world');
})


app.listen(3000);