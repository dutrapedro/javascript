'use strict';
const saleItemValidator = require('../transform/sale-item-validator');

const itemDataSeparator = '-';
const id = 0;
const quantity = 1;
const price = 2;

function handleItemIfNotValid(data) {
    let item = splitItemIfNotNull(data);
    if(!saleItemValidator.validate(item)) {
        return new Array(0,0,0);
    }
    return item;
}

function splitItemIfNotNull(data) {
    if(data) return data.split(itemDataSeparator);
    return data;
}

function item(data) {
    let item = handleItemIfNotValid(data);
    return {
        id: item[id],
        quantity: parseFloat(item[quantity]),
        price: parseFloat(item[price])
    }
}

module.exports = item;