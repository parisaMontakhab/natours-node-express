const express = require('express');
const {
  getAllTour,
  createNewTour,
  getTour,
  updateTour,
  deleteTour,

  checkedBody,
} = require('../controllers/tourControllers');
const router = express.Router();

router.route('/').get(getAllTour).post(checkedBody, createNewTour);

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
