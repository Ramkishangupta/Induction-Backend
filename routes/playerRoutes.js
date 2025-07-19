const express = require('express');
const router = express.Router();
const {
    createPlayer,
    getAllPlayers,
    updatePlayerScore
} = require('../controller/playerController');

// POST /players - create new player
router.post('/', createPlayer);

// GET /players - get leaderboard
router.get('/', getAllPlayers);

// PATCH /players/:reqNo - update score
router.patch('/:reqNo', updatePlayerScore);

module.exports = router;
