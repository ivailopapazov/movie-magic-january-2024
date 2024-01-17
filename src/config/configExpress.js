const express = require('express');
const path = require('path');

function configExpress(app) {
    app.use(express.static(path.join(__dirname, 'public')))

    return app;
}

module.exports = configExpress;
