const express = require('express');
const {
  getAllTour,
  createNewTour,
  getTour,
  updateTour,
  deleteTour,
  aliasTopTours,
  getTourStats,
} = require('../controllers/tourControllers');
const router = express.Router();

router.route('/top-5-cheap').get(aliasTopTours, getAllTour);

router.route('/tour-stats').get(getTourStats);

router.route('/').get(getAllTour).post(createNewTour);

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
