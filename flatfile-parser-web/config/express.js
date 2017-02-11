'use strict';

const express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    consign = require('consign');

module.exports = () => {
    let app = express();

    app.use(bodyParser.text({ type: 'text/plain' }));
    app.use('/', express.static(path.resolve() + '/app'));

    consign()
        .include('./app/server/routes')
        .into(app);

    

    return app;
}