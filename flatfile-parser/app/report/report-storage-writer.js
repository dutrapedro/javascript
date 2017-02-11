'use strict';

const fs = require('fs');
const openFileMode = 'w';

function saveReportOnTheDisk(savePath, report,callback) {
    let fileToWrite = fs.openSync(savePath.concat('report.done.dat'), openFileMode);
    let reportJsonFormat = JSON.stringify(report)
    fs.write(fileToWrite, reportJsonFormat, callback);
}

const reportStorageWriter = {
    saveReportOnTheDisk: saveReportOnTheDisk
}

module.exports = reportStorageWriter;