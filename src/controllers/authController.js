const router = require('express').Router();

router.get('/register', (req, res) => {
    res.render('auth/register');
});

module.exports = router;
