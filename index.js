'use strict';

// Load libaries
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var server = app.listen(port, function() {
  console.log("[index.js] Port:       "+ server.address().port);
});
var io = require('socket.io')(server);

app.use(express.static('public'));

//redirects browser to /public/website.html when url is typed in
app.get("/", function(req, res) {
	res.sendFile(__dirname+"/public/website.html");
});

//sends "/public/socket.io.js" when requested by the browser
app.get("/socket.io.js", function(req, res) {
	res.sendFile(__dirname+"/public/socket.io.js");
});


// ~~~~~~[ socket.io sample code ]~~~~~~
// the following is not needed for a webserver. delete if you want. socket.io just simplifies client and server interactions replacing AJAX calls.
//refer to https://socket.io for more information and documentation
io.on('connection', onSocketConnection);
function onSocketConnection(socket) {
	socket.on('sampleSocketCall', randomFunction);

	function randomFunction(packet){
		//do something
	}
	
 }
