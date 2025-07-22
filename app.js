const express = require('express');
const cors = require('cors');

const app = express();

const allowedOrigins = [
  'https://varaha.itch.io/feinduction',
  'https://leaderboard-2025.vercel.app'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};
app.use(express.json());


const playerRoutes = require("./routes/playerRoutes");

app.use("/api/v1", playerRoutes);

module.exports = app;
