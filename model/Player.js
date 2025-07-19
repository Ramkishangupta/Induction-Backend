const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ReqNo: {
        type: String,
        required: true,
        unique: true
    },
    score: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Player', playerSchema);
