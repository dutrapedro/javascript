'use strict';
const createItem = require('./item');

const saleItemsSeparator = ',';
const saleSeparator = 'ç';
const itemFilter = /^\[|\]$/g;
const id = 1;
const items = 2;
const salesman = 3;

function itemWithoutBrackets(items) {
    return items.replace(itemFilter, '');
}

function separateItems(items) {
    return itemWithoutBrackets(items).split(saleItemsSeparator);
}

function sale(data) {
    return {
        id: data[id],
        items: separateItems(data[items]).map( (item) => createItem(item)),
        salesman: data[salesman],
        type: 'sale'
    }
}

module.exports = sale;