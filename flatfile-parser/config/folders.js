'use strict';
const mkdirp = require('mkdirp');
const logger = require('../logger.js');

const reportPath = process.env.HOME + '/data/out/';
const serverDownloadsPath = process.env.HOME + '/data/in/';
const serverTmpPath = process.env.HOME + '/data/.tmp/';
const logFolder = process.env.HOME.concat('/data/logs/');

function createReportFolder() {
    mkdirp(reportPath, (err) => {
        if (err) logger.warn(err);
        else logger.info('Report folder created!');
    });
}

function createDownloadsFolder() {
    mkdirp(serverDownloadsPath, (err) => {
        if (err) logger.warn(err);
        else logger.info('Downloads folder created!');
    });
}

function createTmpFolder() {
    mkdirp(serverTmpPath, (err) => {
        if (err) logger.warn(err);
        else logger.info('Temporary folder created!');
    });
}

function createLogsFolder() {
    mkdirp(logFolder, (err) => {
        if (err) logger.warn(err);
        else logger.info('Log folder created!');
    });
}

exports.reportPath = reportPath;
exports.serverDownloadsPath = serverDownloadsPath;
exports.setupFolders = () => {
    logger.info('Configuring server folders...');
    createReportFolder();
    createDownloadsFolder();
    createTmpFolder();
    createLogsFolder();
}