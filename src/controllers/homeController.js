const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home', { layout: false });
});

module.exports = router;