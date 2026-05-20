// requires

const express = require('express');

const fs = require('fs');

const morgan = require('morgan');
const { json } = require('stream/consumers');

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

//users

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/users.json`),
);

const getAllUsers = (req, res) => {
  res.status(200).json({ status: 'success', data: { users } });
};

const createNewUser = (req, res) => {
  const newID = Date.now().toString();

  const newUser = Object.assign({ _id: newID }, req.body);

  users.push(newUser);

  fs.writeFile(
    `${__dirname}/dev-data/data/users.json`,
    JSON.stringify(users),
    (err) => {
      res.status(201).json({ status: 'success', data: { user: newUser } });
    },
  );
};

const getUser = (req, res) => {
  const id = req.params.id;
  const user = users.find((el) => el._id === id);

  if (!user) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    data: { user },
  });
};

const updateUser = (req, res) => {
  const id = req.params.id;
  const user = users.find((el) => el._id === id);

  if (!user) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    data: { user: 'Updating the data...' },
  });
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  const user = users.find((el) => el._id === id);

  if (!user) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
};

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
