var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//khai bao mongoose
var mongoose = require('mongoose');
//khai bao url cua local va cloud db server
var local = "mongodb://127.0.0.1:27017/gch1101";
var cloud= "mongodb+srv://tutagch210167:tu19032003@cluster0.foirayj.mongodb.net/demo";
//=> link/dbname/collection
var app = express();
//check ket noi
// mongoose.connect(url2)
// .then(()=> console.log('Connect success'))
// .catch((err)=> console.log(err));
//Connect den database
// mongoose.connect(local, (err) => {
//   if (err) {
//     console.error("Connect error: ");
//     console.error(err);
//   } else {

//   }
// })
//dung code moi cho mongoose moi nhat
mongoose.connect(local)
.then(() => {console.log("Connect db successed!")})
.catch((err) => {console.error(err)})


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
