const express = require('express');
const {
  getAllTour,
  createNewTour,
  getTour,
  updateTour,
  deleteTour,
} = require('../controllers/tourControllers');
const router = express.Router();

router.route('/').get(getAllTour).post(createNewTour);

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
