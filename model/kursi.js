const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const kursi = new mongoose.Schema({
    kolomKursi: {
        type: String,
        required: true,
    },
    barisKursi: {
        type: Number,
        required: true,
    },
});

const Kursi = mongoose.model('Kursi', kursi);
module.exports = Kursi;