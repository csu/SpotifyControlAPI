express = require("express")
spotify = require("spotify-node-applescript")
bodyParser = require("body-parser")

app = express()
app.set "views", __dirname + "/views"
app.set "view engine", "html"
app.engine "html", require("hbs").__express
app.use bodyParser()
app.use "/public", express.static(__dirname + "/public")

router = express.Router()

playSong = (uri) ->
  spotify.playTrack uri, ->
  return

router.get "/play/:uri", (req, res) ->
  playSong req.params.uri
  res.render "redirect"
  return

router.post "/play", (req, res) ->
  playSong req.body.uri
  res.render "redirect"
  return

router.post "/", (req, res) ->
  playSong req.body.uri
  res.render "redirect"
  return

router.get "/", (req, res) ->
  res.render "search"
  return

app.use "/", router
port = 3000
app.listen port
console.log "Magic happens on port #{port}"