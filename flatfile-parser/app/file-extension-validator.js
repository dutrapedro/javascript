'use strict';
const path = require('path');
const logger = require(path.resolve().concat('/logger'));
const validator = require('validator');
const validFileExtension = '.dat';

function isUndefined(filePath) {
    if(undefined == filePath) {
        logger.error('No filepath was provided!');
        return true;
    }
    return false;
}

function isNotDatExtension(filepath) {
    let extensionName = path.extname(filepath);
    if(!validator.equals(validFileExtension, extensionName)) {
        logger.error('Flatfile parser only parse .dat files');
        return true;
    }
    return false;
}

exports.isValidFileExtension = (filePath) =>{
    return (isUndefined(filePath) || isNotDatExtension(filePath)) ? false : true;
}