const express = require('express');

const fs = require('fs');

const app = express();

// handling get method

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`),
);

app.get('/api/tours', (req, res) => {
  res.status(200).json({ status: 'success', data: { tours } });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
