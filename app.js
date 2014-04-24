var express = require('express');
var spotify = require('spotify-node-applescript');
 
var app = express();

app.get('/play/:uri', function(req, res) {
    spotify.playTrack(req.params.uri, function(){
    // track is playing
    });
    res.send(200, {uri: req.params.uri});
});
 
app.listen(3000);
console.log('Listening on port 3000...');