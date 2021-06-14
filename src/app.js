import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index';
import userRouter from './routes/user.router';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/user', userRouter);

// connect to MongoDB
// connect to MongoDB
// connect to MongoDB

const URL = 'mongodb+srv://hghotra:XHZ8gv3R@inventory1.92pfc.mongodb.net';
const mongoose = require('mongoose');

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// end of MongoDB
// end of MongoDB
// end of MongoDB

export default app;
