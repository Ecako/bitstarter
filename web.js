var express = require('express'),
	app = express.createServer(express.logger()),
	fs = require('fs'),
	http = require('http');

app.get('/', function(request, response) {
	response.write(fs.readFileSync("./index.html", "utf8").toString());
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
