const express = require('express');
const {
  getAllUsers,
  createNewUser,
  getUser,
  updateUser,
  deleteUser,
  checkID,
  updateMe,
} = require('../controllers/userControllers');

const {
  signup,
  login,
  forgotPassword,
  resetPassword,
  updatePassword,
  protect,
} = require('../controllers/authController');

const router = express.Router();

router.param('id', checkID);

router.post('/signup', signup);

router.post('/login', login);

router.post('/forgotPassword', forgotPassword);

router.patch('/resetPassword/:token', resetPassword);

router.patch('/updateMyPassword', protect, updatePassword);

router.patch('/updateMe', protect, updateMe);

router.route('/').get(getAllUsers).post(createNewUser);

router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
