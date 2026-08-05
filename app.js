// requires
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorControllers');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const viewRouter = require('./routes/viewRoutes');
const bookingRouter = require('./routes/bookingRoutes');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.set('query parser', 'extended');
// global middleware

// serving static files

app.use(express.static(path.join(__dirname, 'public')));

// set security http headers
// app.use(
//   helmet({
//     contentSecurityPolicy: {
//       directives: {
//         defaultSrc: ["'self'"],

//         scriptSrc: [
//           "'self'",
//           'https://api.mapbox.com',
//           'https://cdnjs.cloudflare.com',
//         ],

//         styleSrc: [
//           "'self'",
//           "'unsafe-inline'",
//           'https://api.mapbox.com',
//           'https://fonts.googleapis.com',
//         ],

//         fontSrc: ["'self'", 'https://fonts.gstatic.com', 'data:'],

//         imgSrc: ["'self'", 'data:', 'blob:'],

//         connectSrc: [
//           "'self'",
//           'https://api.mapbox.com',
//           'https://events.mapbox.com',
//           'https://cdnjs.cloudflare.com',
//         ],

//         workerSrc: ["'self'", 'blob:'],

//         childSrc: ["'self'", 'blob:'],
//       },
//     },
//   }),
// );

//development login
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//limit rate request from api
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try a gain in an hour',
});

app.use('/api', limiter);

//body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));

app.use(cookieParser());

//data sanitization against NoSQL query injection
app.use(mongoSanitize());

//data sanitization against XXS
app.use(xss());

//prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      'duration',
      'maxGroupSize',
      'difficulty',
      'ratingsAverage',
      'ratingsQuantity',
      'price',
    ],
  }),
);

// routes

app.use('/', viewRouter);
app.use('/api/tours', tourRouter);
app.use('/api/users', userRouter);
app.use('/api/reviews', reviewRouter);
app.use('/api/bookings', bookingRouter);

// Global error handling

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl}  ...`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
