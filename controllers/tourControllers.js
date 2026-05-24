const Tour = require('../models/tourModels');

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

exports.createNewTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({ status: 'success', data: { tour: newTour } });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
