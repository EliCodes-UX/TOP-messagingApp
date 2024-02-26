const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT || 9040;
const jwt = require('jsonwebtoken');
const cors = require('cors');
const User = require('./models/User');

mongoose.connect(process.env.MONGO_URL);
const jwtSecret = process.env.JWT_SECRET;

const app = express();
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

app.get('/test', (req, res) => {
  res.json('test ok');
});

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const createdUser = await User.create({ username, password });
    jwt.sign({ userId: createdUser._id }, jwtSecret, {}, (err, token) => {
      if (err) throw err;
      res.cookie('token', token).status(201).json({
        id: createdUser._id,
      });
    });
  } catch (err) {
    if (err) throw err;
    res.status(500).json('error');
  }
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
