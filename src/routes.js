const router = require('express').Router();

const homeController = require('./controllers/homeController'); 

router.use(homeController);

module.exports = router;
