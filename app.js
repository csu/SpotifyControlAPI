var express = require('express');
var spotify = require('spotify-node-applescript');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());

var router = express.Router();

function playSong(uri) {
    spotify.playTrack(uri, function(){});
}

router.get('/play/:uri', function(req, res) {
    playSong(req.params.uri);
    res.sendfile('redirect.html')
    // res.send(200, {reponse: "it worked!"});
});

router.post('/play', function(req, res) {
    playSong(req.body.uri);
    res.sendfile('redirect.html')
    // res.send(200, {response: "now playing " + req.body.uri});
});

router.post('/', function(req, res) {
    playSong(req.body.uri);
    res.sendfile('redirect.html')
    // res.send(200, {response: "now playing " + req.body.uri});
});

router.get('/', function(req, res) {
    res.sendfile('index.html')
});

app.use('/', router);

var port = 3000;
app.listen(port);
console.log('Magic happens on port ' + port);