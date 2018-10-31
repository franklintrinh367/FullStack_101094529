

var callbackLoop = function(counter, callback) {

    for(var i=1; i <= counter; i++) {
        callback(i);
    }
    console.log("*** exiting callbackLoop *****");
}

var handleCounter = function (result) {
    console.log('The callback count is ' + result);
}

callbackLoop(5, handleCounter);
callbackLoop(2, handleCounter);
callbackLoop(9, handleCounter);