var express = require('express');
var router = express.Router();
const StudentModel = require('../models/StudentModel');
const FounderModel = require('../models/FounderModel');
/* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Express' });
  });

// router.post('/message', function(req, res) {
//   res.render('message', {body : req.body});
// });

router.get('/student', async(req, res) => {
  //=sql: Select * from Student
  const students = await StudentModel.find()
  // console.log(students);
  res.render('student',{students: students});
});
router.get('/student/drop', async(req, res) => {
  await StudentModel.deleteMany()
  .then(()=> {console.log("Delete all ok")})
  .catch((err) => {console.log("delete falid")})
});
router.get('/student/delete/:id', async(req, res) => {
  await StudentModel.findByIdAndDelete(req.params.id)
  .then(()=> {console.log("delete ok")})
  .catch((err) => {console.log("delete falied")})
});

router.get('/founder', async(req, res) => {
  const founders = await StudentModel.find()
  // console.log(students);
  res.send(founders);
});


module.exports = router;
