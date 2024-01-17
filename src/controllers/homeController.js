const router = require('express').Router();

const movieService = require('../services/movieService');

router.get('/', (req, res) => {
    const movies = movieService.getAll();

    res.render('home', { movies });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/404', (req, res) => {
    res.render('404');
});

module.exports = router;