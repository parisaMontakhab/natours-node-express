const express = require('express');
const {
  getAllReviews,
  createReview,
  deleteReview,
  updateReview,
  setTourUsersIds,
  getReview,
} = require('../controllers/reviewControllers');
const { protect } = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(getAllReviews)
  .post(protect, setTourUsersIds, createReview);

router.route('/:id').delete(deleteReview).patch(updateReview).get(getReview);

module.exports = router;
