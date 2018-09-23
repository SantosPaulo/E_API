require('dotenv').config();
require('./utils/dollar-require');

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const errorHandler = require('./http/middlewares/errorHandler');
const forwardToError = require('./http/middlewares/forwardToError');
const { mongo } = require('./configs/app');

const mongoose = require('mongoose');
mongoose.connect(mongo.url);

const indexRouter = require('./routes/index');
const apiAuth = require('./routes/api/auth');
const apiV1 = require('./routes/api/v1');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1', apiV1);
app.use('/api/v1', apiAuth);

// catch 404 and forward to error handler
app.use(forwardToError);

// error handler
app.use(errorHandler);

module.exports = app;
