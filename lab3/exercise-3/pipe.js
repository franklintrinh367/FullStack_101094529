
var request = require('request');

var fs = require('fs');

var readStream = fs.createReadStream(request.get("https://"));
var writeStream = fs.createWriteStream("output.html");

readStream.pipe(writeStream);
