const mongoose = require('mongoose');

const reservasiKursi = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    kolomKursi: {
        type: String,
        required: true,
    },
    barisKursi: {
        type: Number,
        required: true,
    },
    registrationDate: {
        type: Date,
        required: true,
        default: Date.now()
    },
});

reservasiKursi.index({ kolomKursi: 1, barisKursi: 1 }, { unique: true });

const ReservasiKursi = mongoose.model('ReservasiKursi', reservasiKursi);
module.exports = ReservasiKursi;
