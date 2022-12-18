const mongoose = require('mongoose')

const uerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 2
    },
    description: {
        type: String,
        required: true
    },
    PostImage: {
        type: String,
        default: "https://cdn.siasat.com/wp-content/uploads/2020/04/Instagram--780x470.jpg"
    },
    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Instaclone', uerSchema);