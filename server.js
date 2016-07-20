var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));


//app.use('/static', express.static(__dirname + '/public'));

app.set('port', (process.env.PORT || 8080));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});



app.listen(app.get('port'), function (){
	console.log('Node app is running on port', app.get('port'));
});