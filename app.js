const express = require('express');

const fs = require('fs');

const app = express();

app.use(express.json());

// handling get method

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`),
);

app.get('/api/tours', (req, res) => {
  res.status(200).json({ status: 'success', data: { tours } });
});

app.post('/api/tours', (req, res) => {
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
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
