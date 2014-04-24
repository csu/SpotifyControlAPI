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

router.get('/play', function(req, res) {
    spotify.playTrack(req.body.uri, function(){});
    res.send(200, req.body);
});

router.get('/', function(req, res) {
    res.sendfile('index.html')
});

app.use('/api', router);

var port = 3000;
app.listen(port);
console.log('Magic happens on port ' + port);