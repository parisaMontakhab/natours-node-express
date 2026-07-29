const express = require('express');
const {
  getOverview,
  getTour,
  getLoginForm,
} = require('../controllers/viewsController');
const { isLogin } = require('../controllers/authController');

const router = express.Router();

router.use(isLogin);

router.get('/', getOverview);

router.get('/tour/:slug', getTour);

router.get('/login', getLoginForm);

module.exports = router;
