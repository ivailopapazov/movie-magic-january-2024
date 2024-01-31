const router = require('express').Router();

const homeController = require('./controllers/homeController'); 
const movieController = require('./controllers/movieController');
const castController = require('./controllers/castController');
const authController = require('./controllers/authController');

router.use(homeController);
router.use(movieController);
router.use('/cast', castController);
router.use('/auth', authController);

router.get('*', (req, res) => {
    res.redirect('/404');
});

module.exports = router;
