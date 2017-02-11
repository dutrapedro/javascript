'use strict';

const reportType = {
    'seller': updateTotalOfSellersOrCustomers,
    'customer': updateTotalOfSellersOrCustomers
}

function updateTotalOfSellersOrCustomers(model, report) {
    let newReport = JSON.parse(JSON.stringify(report));
    let reportKey = model.type == 'seller' ? 'totalOfSellers' : 'totalOfCustomers';
    newReport[reportKey] += 1;
    return newReport;
}

function higherSale(storedSale, currentSale) {
    if(undefined == storedSale) return currentSale;
    storedSale.profit = getSaleProfit(storedSale);
    currentSale.profit = getSaleProfit(currentSale);
    return currentSale.profit > storedSale.profit ? currentSale : storedSale;
}

function getSaleProfit(sale) {
    if(undefined == sale) return 0;
    return sale.items.reduce( (acc, item) => {
        return acc + (item.price*item.quantity);
    }, 0);
}

function getHighProfitSale(currentSale, report) {
    let storedSale = report['highProfitSale'];
    let newReport = JSON.parse(JSON.stringify(report));
    newReport['highProfitSale'] = higherSale(storedSale, currentSale);
    return newReport;
    
}

function getSellerProfit(currentSale, report) {
    let newReport = JSON.parse(JSON.stringify(report));
    let sellerProfit = getSaleProfit(currentSale);
    let sellers =  newReport['sellers'].concat({ name: currentSale.salesman, profit: sellerProfit });
    newReport['sellers'] = sellers;
    return newReport;
}

function calculateWorstSeller(sellers) {
    return sellers.reduce( (prevSeller, currentSeller) => {
        return currentSeller.profit < prevSeller.profit ? currentSeller : prevSeller;
    }, { profit: Number.MAX_VALUE });
}

function updatePartialReport(model, report) {
    if(model.type == 'sale') {
        let newReport = getSellerProfit(model, report);
        newReport = getHighProfitSale(model, newReport);
        return newReport;
    }
    return reportType[model.type](model, report);
}

function createFinalReport(report){
    let finalReport = JSON.parse(JSON.stringify(report));
    let sellers = finalReport['sellers'];
    let worstSeller = calculateWorstSeller(sellers);
    finalReport['worstSeller'] = worstSeller;
    return finalReport;
}

exports.createFinalReport = createFinalReport;
exports.updatePartialReport = updatePartialReport;