const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT || 9040;

mongoose.connect(process.env.MONGO_URL);

const app = express();

app.get('/test', (req, res) => {
  res.json('test ok');
});
app.post('/register', (req, res) => {});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
