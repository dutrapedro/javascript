'use strict';

const lineExtractor = require('./app/line-extractor');
const transformLine = require('./app/transform/line-transformer');
const reportManager = require('./app/report/report-updater');
const reportStorageWriter = require('./app/report/report-storage-writer');
const isValidExtension = require('./app/file-extension-validator').isValidFileExtension;
const logger = require('./logger');
const reportPath = require('./config/folders').reportPath;

const fs  = require('fs');

function updatePartialReportIfModelIsNotNull(report, line) {
    logger.info('Trying transform line in model: '+line);
    let model = transformLine(line);
    if(model) {
        logger.info('Line: '+line+' is now this model: '+JSON.stringify(model));
        return reportManager.updatePartialReport(model, report);
    }
    logger.info('Model is empty, retuning current report');
    return report;
}

function saveReport(finalReport, filePath) {
    reportStorageWriter.saveReportOnTheDisk(reportPath, finalReport,(error) => {
        if(error) throw error;
        logger.info('Report saved in disk!');
    });
}

exports.generateReport = (filePath, filename) => {
    logger.info('Started to parse file at '+filePath);
    if(!isValidExtension(filename)) return;
    lineExtractor
        .setup({ input: fs.createReadStream(filePath) })
        .eachLine( updatePartialReportIfModelIsNotNull )
        .then( saveReport.bind(this. filePath) )
        .catch( (error) => {
            throw error;
        });
}