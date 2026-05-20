// requires

const express = require('express');

const fs = require('fs');

const morgan = require('morgan');

const app = express();

//middleware
app.use(morgan('dev'));
app.use(express.json());

// routes handling

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`),
);

const getAllTour = (req, res) => {
  res.status(200).json({ status: 'success', data: { tours } });
};

const getTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  if (!tour) {
    return res.status(404).json({ status: 'fail', message: 'Invalid ID' });
  }

  res.status(200).json({ status: 'success', data: { tour } });
};

const updateTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  if (!tour) {
    return res.status(404).json({ status: 'fail', message: 'Invalid ID' });
  }

  res
    .status(200)
    .json({ status: 'success', data: { tour: 'Updating the data...' } });
};

const deleteTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  if (!tour) {
    return res.status(404).json({ status: 'fail', message: 'Invalid ID' });
  }

  res.status(204).json({ status: 'success', data: null });
};

const createNewTour = (req, res) => {
  const newID = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newID }, req.body);

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({ status: 'success', data: { tour: newTour } });
    },
  );
};

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/users.json`),
);

const getAllUsers = (req, res) => {
  res.status(200).json({ status: 'success', data: { users } });
};

const getUser = (req, res) => {};

const createNewUser = (req, res) => {};

const updateUser = (req, res) => {};

const deleteUser = (req, res) => {};

// routes

const tourRouter = express.Router();
const userRouter = express.Router();

tourRouter.route('/').get(getAllTour).post(createNewTour);

tourRouter.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

userRouter.route('/').get(getAllUsers).post(createNewUser);

userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

app.use('/api/tours', tourRouter);
app.use('/api/users', userRouter);

// stat the server

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
