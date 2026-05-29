// requires
const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
app.set('query parser', 'extended');
//middleware

if ((process.env.NODE_ENV = 'development')) {
  app.use(morgan('dev'));
}

app.use(express.json());

// routes

app.use('/api/tours', tourRouter);
app.use('/api/users', userRouter);

module.exports = app;
