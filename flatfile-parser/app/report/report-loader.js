'use strict';
const fs = require('fs');
const reportPath = require('../../config/folders').reportPath;
const reportEncoding = 'utf8';

function loadReport() {
    let json;
    try {
        json = JSON.parse(fs.readFileSync(reportPath.concat('report.done.dat'), reportEncoding));
    } catch (error) {
        json = {report: 'report not found'}
    }
    return json;
}

exports.loadReport = loadReport;