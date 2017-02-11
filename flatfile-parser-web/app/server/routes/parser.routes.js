'use strict';
const path = require('path');

module.exports = app => {

    app.get('/', (request, response) => {
        response.sendFile(path.resolve() + '/app/server/layout/root.html');
    });

    app.post('/parseFile', (request, response) => {
        console.log('TESTANDO REQUEST BODY '+request.body);
    });
}