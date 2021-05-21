var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var custumerRouter = require('./routes/custumer');
var dashboardRouter = require('./routes/dashboard');
var phaseRouter = require('./routes/phase');
var projectRouter = require('./routes/project');
var registerCustumerRouter = require('./routes/register-custumer');
var registerPhaseRouter = require('./routes/register-phase');
var registerProjectRouter = require('./routes/register-project');
var registerStageRouter = require('./routes/register-stage');
var stageRouter = require('./routes/stage');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/custumer', custumerRouter);
app.use('/dashboard', dashboardRouter);
app.use('/phase', phaseRouter);
app.use('/project', projectRouter);
app.use('/register-custumer', registerCustumerRouter);
app.use('/register-phase', registerPhaseRouter);
app.use('/register-project', registerProjectRouter);
app.use('/register-stage', registerStageRouter);
app.use('/stage', stageRouter);

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
