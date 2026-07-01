const fs = require('fs');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) {
      newObj[el] = obj[el];
    }
  });

  return newObj;
};

exports.checkID = (req, res, next, val) => {
  if (req.params.id * 1 > users.length) {
    return res.status(404).json({ status: 'fail', message: 'Invalid ID' });
  }
  next();
};

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({ status: 'success', data: { users } });
});

exports.createNewUser = (req, res) => {
  const newID = Date.now().toString();

  const newUser = Object.assign({ _id: newID }, req.body);

  users.push(newUser);

  fs.writeFile(
    `${__dirname}/../dev-data/data/users.json`,
    JSON.stringify(users),
    (err) => {
      res.status(201).json({ status: 'success', data: { user: newUser } });
    },
  );
};

exports.getUser = (req, res) => {
  const id = req.params.id;
  const user = users.find((el) => el._id === id);

  res.status(200).json({
    status: 'success',
    data: { user },
  });
};

exports.updateUser = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: { user: 'Updating the data...' },
  });
};

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.updateMe = catchAsync(async (req, res, next) => {
  // 1) create error if user posts password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'The route is just for update the data not for updating password!',
        400,
      ),
    );
  }

  // 2) update user data
  const filteredBody = filterObj(req.body, 'name', 'email');
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser,
    },
  });
});
