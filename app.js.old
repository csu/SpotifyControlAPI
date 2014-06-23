var express = require('express');
var spotify = require('spotify-node-applescript');
var bodyParser = require('body-parser');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.use(bodyParser());
app.use("/public", express.static(__dirname + "/public"));

var router = express.Router();

function playSong(uri) {
    spotify.playTrack(uri, function(){});
}

router.get('/play/:uri', function(req, res) {
    playSong(req.params.uri);
    res.render('redirect');
});

router.post('/play', function(req, res) {
    playSong(req.body.uri);
    res.render('redirect');
});

router.post('/', function(req, res) {
    playSong(req.body.uri);
    res.render('redirect');
});

router.get('/', function(req, res) {
    res.render('search');
});

app.use('/', router);

var port = 3000;
app.listen(port);
console.log('Magic happens on port ' + port);