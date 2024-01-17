const movies = [{
    _id: 1,
    title: 'Jungle Cuise',
    genre: 'Adventure',
    director: 'Spilberg',
    year: '2019',
    imageUrl: '/img/jungle-cruise.jpeg',
    rating: '5',
    description: 'Dreaming about saving countless lives and having another adventure, the feisty English feminist and doctor of botany, Dr Lily Houghton, embarks on a peril-laden mission to change the world. Along with her fashionable brother, MacGregor, Dr Houghton enlists the help of the arrogant, wisecracking riverboat skipper, Captain Frank Wolff, to guide them through the serpentine Amazon River in La Quila, his swift wooden boat. Now, as the intrepid trio ventures deeper and deeper into the heart of an impenetrable green maze, searching for something that cannot be found, a centuries-old curse and the ruthless aristocrat, Prince Joachim, threaten to put an end to their ambitious plans.'
}];

exports.getAll = () => {
    return movies.slice();
    // return [...movies];
    // return Array.from(movies); ??
};

exports.search = (title, genre, year) => {
    let result = movies.slice();

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

exports.getOne = (movieId) => {
    const movie = movies.find(movie => movie._id == movieId);

    return movie;
};

exports.create = (movieData) => {
    movieData._id = movies[movies.length - 1]._id + 1;

    movies.push(movieData);
};
