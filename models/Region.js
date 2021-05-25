const mongoose = require('mongoose');


const RegionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    platforms: [{
        type: String
    }],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Region = mongoose.model('Region', RegionSchema);