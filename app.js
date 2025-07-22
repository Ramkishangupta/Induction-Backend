const express = require('express');
const cors = require('cors'); // 🔹 Import CORS

const app = express();

app.use(cors()); // 🔹 Enable CORS for all origins
app.use(express.json());

// 🔹 Route import
const playerRoutes = require("./routes/playerRoutes");

app.use("/api/v1", playerRoutes);

module.exports = app;
