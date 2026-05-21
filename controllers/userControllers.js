const fs = require('fs');

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/users.json`),
);

exports.getAllUsers = (req, res) => {
  res.status(200).json({ status: 'success', data: { users } });
};

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

exports.updateUser = (req, res) => {
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

exports.deleteUser = (req, res) => {
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
