var express = require('express');
var spotify = require('spotify-node-applescript');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());

var router = express.Router();

router.get('/play/:uri', function(req, res) {
    spotify.playTrack(req.params.uri, function(){});
    res.send(200, {reponse: "it worked!"});
});

router.post('/play', function(req, res) {
    console.log(req.body)
    spotify.playTrack(req.body.uri, function(){});
    res.send(200, req.body.uri);
});

router.get('/', function(req, res) {
    res.sendfile('index.html')
});

app.use('/', router);

var port = 3000;
app.listen(port);
console.log('Magic happens on port ' + port);