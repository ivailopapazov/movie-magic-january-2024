const router = require('express').Router();

const movieService = require('../services/movieService');

router.get('/', async (req, res) => {
    const movies = await movieService.getAll().lean();

    res.render('home', { movies });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/search', (req, res) => {
    const { title, genre, year } = req.query;
    const movieResult = movieService.search(title, genre, year);

    res.render('search', { movies: movieResult, title, genre, year });
});

router.get('/404', (req, res) => {
    res.render('404');
});

module.exports = router;
