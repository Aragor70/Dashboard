const mongoose = require('mongoose');


const PlatformSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: String
    },
    data: [{
        type: String
    }],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Platform = mongoose.model('Platform', PlatformSchema);