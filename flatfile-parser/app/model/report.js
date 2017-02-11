'use strict';

const initialCustomersCount = 0;
const inititalSellersCount = 0;
const initalHigherSale = null;
const initialWorstSeller = null;
const initialSellers = [];

function report() {
    return {
        totalOfCustomers: initialCustomersCount,
        totalOfSellers: inititalSellersCount,
        highProfitSale: initalHigherSale,
        worstSeller: initialWorstSeller,
        sellers: initialSellers
    }
}

module.exports = report;