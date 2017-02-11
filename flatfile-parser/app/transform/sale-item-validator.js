'use strict';
const validator = require('validator');
const logger = require('../../logger.js');

const integerOrDecimalPattern = /^\d+(\.\d+)?$/;
const quantity = 1;
const price = 2;
const emptyItem = 0;

function isEmptyItem(item) {
    if (undefined == item || item.length == emptyItem) {
        logger.warn('Item is empty, skipping');
        return true;
    }
    return false;
}

function hasInvalidParameters(item) {
    let isValidquantity = validator.matches(item[quantity], integerOrDecimalPattern);
    let isValidprice = validator.matches(item[price], integerOrDecimalPattern);
    if (!isValidquantity || !isValidprice) {
        logger.warn('Item has invalid parameters');
        return true;
    }
    return false;
}

let saleItemValidator = {
    validate: (item) => {
        if(isEmptyItem(item) || hasInvalidParameters(item)) return false;
        return true;
    }
}

module.exports = saleItemValidator;
