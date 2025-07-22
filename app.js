const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: [

  ]
};

app.use(cors({
  origin: ['https://varaha.itch.io/feinduction','https://leaderboard-2025.vercel.app']
}));

app.use(express.json());


const playerRoutes = require("./routes/playerRoutes");

app.use("/api/v1", playerRoutes);

module.exports = app;
