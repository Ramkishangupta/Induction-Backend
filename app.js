const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: '*'
}));
app.use(express.json());


const playerRoutes = require("./routes/playerRoutes");

app.use("/api/v1", playerRoutes);

module.exports = app;
