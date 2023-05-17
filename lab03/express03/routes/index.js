var express = require('express');
var router = express.Router();

router.get('/',(req, res) => {
  res.render('home');
});
router.get('/football',(req, res) => {
  let manu = "Manchester United";
  let chel = "Chealsea";
  let ars = "Arsenal";
  let liver = "Liverpool";
  res.render('football', {mu : manu, cs : chel, ars : ars, liver : liver});
});

router.get('/interesting',(req, res) => {
  var hobby = ["sex", "girls", "movies", "football", "games"];
  res.render('interesting', {interesting : hobby});
});

module.exports = router;
