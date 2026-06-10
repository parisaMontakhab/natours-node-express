// requires
const express = require('express');
const morgan = require('morgan');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorControllers');
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

// Global error handling

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl}  ...`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
