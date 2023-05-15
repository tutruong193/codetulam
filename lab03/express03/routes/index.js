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


module.exports = router;
