var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  //Get the songs from Spotify
  res.json({message: "Song Route Works."})
});

module.exports = router;
