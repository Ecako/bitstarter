var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.write(fs.readFileSync("./index.html", "utf8"0.toString())
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
