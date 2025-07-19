const express = require('express');

const app = express();

app.use(express.json());

//route import
const playerRoutes = require("./routes/playerRoutes");

app.use("/api/v1", playerRoutes);


module.exports = app;