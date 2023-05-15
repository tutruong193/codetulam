var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { fgw: 'Greenwich'});
});


//render new page
// url: /greenwich
// page: fgw.hbs
router.get('/greenwich', (req, res) => {
  res.render('greenwich');
});

router.get('/hanoi', (req, res) => {
  res.render('hanoi', {hn: 'Hanoi', vn : 'VietNam'});
});
router.get('/vietnam', (req, res) => {
   
    var country = 'Vietnam';
    var capital = 'Hanoi';
    var population = '98 milions';
    var sport = 'football';
    var img = 'https://tse1.mm.bing.net/th?id=OIP.PUv9qz973R_SYjYLlznV3QHaOf&pid=Api&P=0';
    res.render('vietnam',{ten_nuoc: country, thu_dp: capital, dan_so: population, anh: img,the_thao: sport});
});

module.exports = router;
