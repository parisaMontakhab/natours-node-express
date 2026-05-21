const express = require('express');
const {
  getAllUsers,
  createNewUser,
  getUser,
  updateUser,
  deleteUser,
} = require('../controllers/userControllers');
const router = express.Router();

router.route('/').get(getAllUsers).post(createNewUser);

router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
