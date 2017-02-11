'use strict';
const readLine = require('readline');
const reportManager = require('./report/report-updater');
const initialReport = require('./model/report.js');
const reportSlot = 0;

function lineReaderOnLine(lineReader, callback, report) {
    lineReader.on('line', (line) => {
        report[reportSlot] = callback(report[reportSlot], line);
    });
}

function lineReaderOnClose(lineReader, report, resolve) {
    lineReader.on('close', () => {
        let partialReport = report[reportSlot];
        let finalReport = reportManager.createFinalReport(partialReport);
        resolve({ report: finalReport });
    });
}
function eachLine(setup) {
    return (callback) => {
        return new Promise( (resolve, reject) => {
            let lineReader;
            let report = [ initialReport() ];

            try {
                lineReader = readLine.createInterface(setup);
            } catch (error) {
                return reject(error);
            }
            lineReaderOnLine(lineReader, callback, report);
            lineReaderOnClose(lineReader, report, resolve);

        });
    }
}

function setup(setup) {
    return {
        eachLine: eachLine(setup)
    }
}

module.exports = {
    setup: setup
};