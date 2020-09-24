var express = require('express')
var app = express()
var path = require('path');
var request = require('request')

app.use('/',express.static(__dirname + '/'));
app.use("/assets", express.static(__dirname + "/assets"));

app.get('/', function (req, res) {

    res.send(path.join(__dirname + '/index.html'));
})
 
app.listen(3000, function (){
	console.log('Example app listening on port 3000!')
})