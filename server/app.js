import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
const URL = 'mongodb://localhost:27017/mernMemories';
import mongoose from 'mongoose';
import postRouter from './routes/postRouter.js';
const connect = mongoose.connect(URL);
connect.then(
  (db) => {
    console.log('Connected correctly to server');
  },
  (err) => {
    console.log(err);
  },
);
var app = express();

app.set('views', path.join('./', 'views'));
app.set('view engine', 'jade');
app.use('/posts', postRouter);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join('./', 'public')));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
