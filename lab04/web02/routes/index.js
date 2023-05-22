var express = require('express');
var router = express.Router();

/* GET home page. */

//render ra form input
router.get('/', function(req, res){
  res.render('input');
});
//lay du lieu tu input
router.post('/output', function(req, res){
  var student = req.body;
  // var tuoi = req.query.tuoi;
  // var ten = req.query.ten;
  // var email = req.query.email;
  // var ngaysinh = req.query.ngaysinh;
  //in ra consolelog
  // console.log(req.body);
  // //in ra web voi res.send
  // res.send(req.body);
  //render ra trong output kem du lieu tu form
  res.render('output',{sinhvien : student});
  //c2res.render('output',{name: ten, email : email, age : tuoi, bod: ngaysinh});
});

router.get('/login', function(req, res){
  res.render('login');
})
router.post('/check', function(req, res){
    var account = req.body;
    if (account.username == 'admin' && account.password == 'admin'){
      res.render('check',{title: "Successfully"});
      res.send("<h1>Ok</h1>")
    } else {
      res.render('check',{title: "Failed"})
      res.send("<h1>Error</h1>")
    };
})

module.exports = router;
