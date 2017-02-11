'use strict';
const lineValidator = require('./line-validator');
const createSale = require('../model/sale');
const createCustomer = require('../model/customer');
const createSeller = require('../model/seller');
const lineDataSeparator = 'ç';
const lineId = 0;
const seller = '001';
const customer = '002';
const sale = '003';

let lineIdentifier = () => {
    return {
        [seller]: createSeller,
        [customer]: createCustomer,
        [sale]: createSale
    }
}

function separateLineData(line) {
    return line.split(lineDataSeparator);
}

let transform = (line) => {
    if(!lineValidator.validate(line)) return;
    let lineData = separateLineData(line);
    let lineDataId = lineData[lineId];
    return lineIdentifier()[lineDataId](lineData);
}

module.exports = transform;