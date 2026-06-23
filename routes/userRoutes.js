const express = require('express');
const {
  getAllUsers,
  createNewUser,
  getUser,
  updateUser,
  deleteUser,
  checkID,
} = require('../controllers/userControllers');

const { signup, login } = require('../controllers/authController');

const router = express.Router();

router.param('id', checkID);

router.post('/signup', signup);

router.post('/login', login);

router.route('/').get(getAllUsers).post(createNewUser);

router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
