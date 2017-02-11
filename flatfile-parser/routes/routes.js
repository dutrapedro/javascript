'use strict';
const bodyParser = require('body-parser');
const multer = require('multer');
const downloadPath = require('../config/folders').serverDownloadsPath;
const upload = multer( { dest: downloadPath } );
const flatfielParser = require('../flatfile-parser');
const reportLoader = require('../app/report/report-loader').loadReport;

module.exports = app => {

    app.use( (request, response, next) => {
        response.header("Access-Control-Allow-Methods", "POST, PUT, OPTIONS");
        response.header("Access-Control-Allow-Origin", "*");
        response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.post('/parseFile', upload.single('file'), (request, response) => {
        let uploadedFile = request.file;
        if (uploadedFile) {
            flatfielParser.generateReport(downloadPath.concat(uploadedFile.filename), uploadedFile.originalname);
            response.status(200);
        }
        response.send('Missing file');
    });

    app.get('/parseFile', (request, response) => {
        let report = reportLoader();
        response.json(report)
    });
}