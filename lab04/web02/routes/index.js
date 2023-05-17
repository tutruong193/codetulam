var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//render ra form input
router.get('/input', function(req, res){
  res.render('input');
});
//lay du lieu tu input
router.post('/output', function(req, res){
  var student = req.body;
  var tuoi = req.query.tuoi;
  var ten = req.query.ten;
  var email = req.query.email;
  var ngaysinh = req.query.ngaysinh;
  //in ra consolelog
  // console.log(req.body);
  // //in ra web voi res.send
  // res.send(req.body);
  //render ra trong output kem du lieu tu form
  res.render('output',{sinhvien : student});
  //c2res.render('output',{name: ten, email : email, age : tuoi, bod: ngaysinh});
});

module.exports = router;
