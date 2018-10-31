var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('');

var port = process.env.POST || 3000;
app.listen(port);