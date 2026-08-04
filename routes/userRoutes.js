const express = require('express');
const {
  getAllUsers,
  createNewUser,
  getUser,
  updateUser,
  updateMe,
  deleteMe,
  deleteUser,
  getMe,
  uploadUserPhoto,
  resizeUserPhoto,
} = require('../controllers/userControllers');

const {
  signup,
  login,
  forgotPassword,
  resetPassword,
  updatePassword,
  protect,
  restrictTo,
  logout,
} = require('../controllers/authController');

const router = express.Router();

router.post('/signup', signup);

router.post('/login', login);

router.get('/logout', logout);

router.post('/forgotPassword', forgotPassword);

router.patch('/resetPassword/:token', resetPassword);

router.use(protect);

router.patch('/updateMyPassword', updatePassword);

router.get('/me', getMe, getUser);

router.patch('/updateMe', uploadUserPhoto, resizeUserPhoto, updateMe);

router.delete('/deleteMe', deleteMe);

router.use(restrictTo('admin'));

router.route('/').get(getAllUsers).post(createNewUser);

router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
