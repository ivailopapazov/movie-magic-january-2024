const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('cast/create');
});

module.exports = router;
