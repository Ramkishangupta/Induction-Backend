const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: [
    'https://varaha.itch.io/feinduction',
    'hhttps://leaderboard-2025.vercel.app/'
  ]
};

app.use(cors(corsOptions));
app.use(express.json());


const playerRoutes = require("./routes/playerRoutes");

app.use("/api/v1", playerRoutes);

module.exports = app;
