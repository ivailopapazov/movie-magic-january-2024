const Movie = require('../models/Movie');

exports.getAll = () => Movie.find();

// TODO: Filter result in mongoDB
exports.search = async (title, genre, year) => {
    let result = await Movie.find().lean();

    if (title) {
        result = result.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
    }

    if (genre) {
        result = result.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
    }

    if (year) {
        result = result.filter(movie => movie.year === year);
    }

    return result;
};

exports.getOne = (movieId) => Movie.findById(movieId);

exports.create = (movieData) => Movie.create(movieData);

exports.attach = async (movieId, castId) => {
    // return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });
    const movie = await this.getOne(movieId)

    // TODO: validate castId if exists
    // TODO: validate if cast is already added
    movie.casts.push(castId);

    return movie.save();
}

