import express from 'express';
import morgan from 'morgan';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import { protect, signin, signup } from './utils/auth';
import indexRouter from './routes/index';
import userRouter from './routes/user.router';
import itemRouter from './routes/item.router';

const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

app.post('/signin', signin);
app.post('/signup', signup);

app.use('/api', protect);
app.use('/api/', indexRouter);
app.use('/api/user', userRouter);
app.use('/api/items', itemRouter);

// connect to MongoDB
// connect to MongoDB
// connect to MongoDB

const URL = 'mongodb+srv://hghotra:XHZ8gv3R@inventory1.92pfc.mongodb.net';
const mongoose = require('mongoose');

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// end of MongoDB
// end of MongoDB
// end of MongoDB

export default app;
