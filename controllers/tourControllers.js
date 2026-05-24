const Tour = require('../models/tourModels');

exports.checkedBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res
      .status(400)
      .json({ status: 'fail', message: 'Missing Name or Price' });
  }
  next();
};

exports.getAllTour = (req, res) => {
  res.status(200).json({ status: 'success' });
};

exports.getTour = (req, res) => {
  res.status(200).json({ status: 'success' });
};

exports.updateTour = (req, res) => {
  res
    .status(200)
    .json({ status: 'success', data: { tour: 'Updating the data...' } });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({ status: 'success', data: null });
};

exports.createNewTour = (req, res) => {
  res.status(201).json({ status: 'success' });
};
