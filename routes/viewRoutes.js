const express = require('express');
const {
  getOverview,
  getTour,
  getLoginForm,
  getAccount,
  getMyTours,
} = require('../controllers/viewsController');
const { isLogin, protect } = require('../controllers/authController');
const { createBookingCheckout } = require('../controllers/bookingControllers');

const router = express.Router();

router.get('/', createBookingCheckout, isLogin, getOverview);

router.get('/tour/:slug', isLogin, getTour);

router.get('/login', isLogin, getLoginForm);

router.get('/me', protect, getAccount);
router.get('/my-tours', protect, getMyTours);

module.exports = router;
