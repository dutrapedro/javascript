'use strict';
const validator = require('validator');
const logger = require('../../logger.js');

const sellerPattern = /^(0{2}1)\u00E7([0-9]+)\u00E7([a-zA-Z\s+]+)\u00E7(\d+(\.\d+)?)+$/;
const customerPattern = /^(0{2}2)\u00E7([0-9]+)\u00E7([a-zA-Z\s+]+)\u00E7([a-zA-Z\s+])+$/;
const salePattern = /^(0{2}3)\u00E7([0-9]+)\u00E7(\[.+(-.+){2}\])\u00E7([a-zA-Z\s+]+)$/;

function isLineEmpty(line) {
    if(undefined == line || validator.isNull(line)) {
        logger.warn('Line is empty, skipping ...');
        return true;
    }
    return false;
}

function lineIsNotInCorrectPattern(line) {
    const isCustomer = validator.matches(line, customerPattern);
    const isSeller = validator.matches(line, sellerPattern);
    const isSale = validator.matches(line, salePattern);
    if(!isCustomer && !isSeller && !isSale) {
        logger.warn('Line does not matches correct pattern, skipping ...');
        return true;
    }
    return false;
}

const lineValidator = {
    validate: (line) => {
        if(isLineEmpty(line) || lineIsNotInCorrectPattern(line)) return false;
        return true;
    }
}

module.exports = lineValidator;