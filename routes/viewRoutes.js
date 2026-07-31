const express = require('express');
const {
  getOverview,
  getTour,
  getLoginForm,
  getAccount,
} = require('../controllers/viewsController');
const { isLogin, protect } = require('../controllers/authController');

const router = express.Router();

router.get('/', isLogin, getOverview);

router.get('/tour/:slug', isLogin, getTour);

router.get('/login', isLogin, getLoginForm);

router.get('/me', protect, getAccount);

module.exports = router;
