const Player = require('../model/Player');

// Create new player
exports.createPlayer = async (req, res) => {
    try {
        const player = new Player(req.body);
        const savedPlayer = await player.save();
        res.status(201).json({success: true});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all players sorted by score (leaderboard)
exports.getAllPlayers = async (req, res) => {
    try {
        const players = await Player.find().sort({ score: -1 });
        res.json({success: true, players});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a player's score
exports.updatePlayerScore = async (req, res) => {
    try {
        const player = await Player.findOne({ ReqNo: req.params.reqNo });
        if (!player) return res.status(404).json({ message: 'Player not found' });

        if (req.body.score !== undefined) {
            player.score = req.body.score;
        }

        const updatedPlayer = await player.save();
        res.json({success:true});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
