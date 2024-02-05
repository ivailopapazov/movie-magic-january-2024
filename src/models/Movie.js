const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 5,
        match: /^[a-zA-Z0-9\s]+$/
    },
    genre: {
        type: String,
        required: true,
        lowercase: true,
        minLength: 5,
        match: /^[a-zA-Z0-9\s]+$/
    },
    director: {
        type: String,
        required: true,
        minLength: 5,
        match: /^[a-zA-Z0-9\s]+$/
    },
    year: {
        type: Number,
        required: true,
        min: 1900,
        max: 2024,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    description: {
        type: String,
        required: true,
        maxLength: 1000,
    },
    imageUrl: {
        type: String,
        required: true,
        match: /^https?:\/\//
    },
    casts: [{
        type: mongoose.Types.ObjectId,
        ref: 'Cast'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
