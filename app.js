var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registerRouter= require('./routes/register');
var dianwaimaiRouter= require('./routes/dianwaimai');
var shangouRouter= require('./routes/shangou');
var kaifangpingtaiRouter= require('./routes/kaifangpingtai');
var jiamengRouter= require('./routes/jiameng');

var shichangfuwuRouter= require('./routes/shichangfuwu');
var lastRouter= require('./routes/dangle');
var kaidianRouter= require('./routes/kaidian');
var shzrRouter= require('./routes/shzr');
var newsRouter= require('./routes/news');
var lastaRouter = require('./routes/last');


var cjwtRouter= require('./routes/cjwt');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register',registerRouter);
app.use('/dianwaimai',dianwaimaiRouter);


app.use('/shangou',shangouRouter);




app.use('/kaifangpingtai',kaifangpingtaiRouter);
app.use('/shzr',shzrRouter);


app.use('/shichangfuwu',shichangfuwuRouter);




app.use('/news',newsRouter);

app.use('/kaidian',kaidianRouter);
app.use('/cjwt',cjwtRouter);
app.use('/last',lastaRouter);
app.use('/dangle',lastRouter);

app.use('/jiameng',jiamengRouter);


// catch 404 and forward to error handler

app.use(function(req, res, next) {

app.use(function( req, res, next) {

  next(createError(404));
});
app.use(function(err,req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};


  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
