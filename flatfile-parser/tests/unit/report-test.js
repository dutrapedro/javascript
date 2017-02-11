'use strict';

const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;
const fs = require('fs');
const resourcesPath = __dirname+'/../resources/resources.json';
const resourcesEncoding = 'utf8';
const linesMock = JSON.parse(fs.readFileSync(resourcesPath, resourcesEncoding));
const reportManager = require('../../app/report/report-updater');

describe('Report', () => {
    it('expect #updatePartialReport() return report with sellers = 1 and report null', () => {
        let newReport = reportManager.updatePartialReport(linesMock['seller-mock'], linesMock['null-report-mock']);
        expect(newReport['totalOfSellers']).to.be.equal(1);
        expect(newReport['totalOfCustomers']).to.be.equal(0);
        expect(newReport['highProfitSale']).to.be.null;
    });

    it('expect #updatePartialReport() return report with customer = 1 and report null', () => {
        let newReport = reportManager.updatePartialReport(linesMock['customer-mock'], linesMock['null-report-mock']);
        expect(newReport['totalOfSellers']).to.be.equal(0);
        expect(newReport['totalOfCustomers']).to.be.equal(1);
        expect(newReport['highProfitSale']).to.be.null;
    });

    it('expect #updatePartialReport() return report with sale not null and report null', () => {
        let newReport = reportManager.updatePartialReport(linesMock['sale-mock'], linesMock['null-report-mock']);
        expect(newReport['totalOfSellers']).to.be.equal(0);
        expect(newReport['totalOfCustomers']).to.be.equal(0);
        expect(newReport['highProfitSale']).to.not.be.null;
        expect(newReport['highProfitSale']['id']).to.be.equal('10');
        expect(newReport['highProfitSale']['items']).to.have.length(4);
        expect(newReport['highProfitSale']['salesman']).to.be.equal('Fabricio');
    });

    it('expect #updatePartialReport() return report with sellers = 1 and report not null', () => {
        let newReport = reportManager.updatePartialReport(linesMock['seller-mock'], linesMock['report-mock']);
        expect(newReport['totalOfSellers']).to.be.equal(6);
        expect(newReport['totalOfCustomers']).to.be.equal(12);
        expect(newReport['highProfitSale']).to.not.be.null;
    });

    it('expect #updatePartialReport() return report with sellers = 1 and report not null', () => {
        let newReport = reportManager.updatePartialReport(linesMock['customer-mock'], linesMock['report-mock']);
        expect(newReport['totalOfSellers']).to.be.equal(5);
        expect(newReport['totalOfCustomers']).to.be.equal(13);
        expect(newReport['highProfitSale']).to.not.be.null;
    });

    it('expect #updatePartialReport() return report with sale not null and report not null', () => {
        let newReport = reportManager.updatePartialReport(linesMock['sale-mock'], linesMock['report-mock']);
        expect(newReport['totalOfSellers']).to.be.equal(5);
        expect(newReport['totalOfCustomers']).to.be.equal(12);
        expect(newReport['highProfitSale']).to.not.be.null;
        expect(newReport['highProfitSale']['id']).to.be.equal('10');
        expect(newReport['highProfitSale']['items']).to.have.length(4);
        expect(newReport['highProfitSale']['salesman']).to.be.equal('Fabricio');
    });

    it('expect #updatePartialReport() return report with sellers = 1', () => {
        let newReport = reportManager.updatePartialReport(linesMock['sale-mock'], linesMock['report-mock']);
        expect(newReport['totalOfSellers']).to.be.equal(5);
        expect(newReport['totalOfCustomers']).to.be.equal(12);
        expect(newReport['highProfitSale']).to.not.be.null;
        expect(newReport['highProfitSale']['id']).to.be.equal('10');
        expect(newReport['highProfitSale']['items']).to.have.length(4);
        expect(newReport['highProfitSale']['salesman']).to.be.equal('Fabricio');
        expect(newReport['sellers']).to.be.an('array');
        expect(newReport['sellers']).to.have.length(1);
    });

    it('expect #createFinalReport() return report with worstSeller = felipe', () => {
        let newReport = reportManager.createFinalReport(linesMock['final-report']);
        expect(newReport['totalOfSellers']).to.be.equal(5);
        expect(newReport['totalOfCustomers']).to.be.equal(12);
        expect(newReport['highProfitSale']).to.not.be.null;
        expect(newReport['highProfitSale']['id']).to.be.equal('5');
        expect(newReport['highProfitSale']['items']).to.have.length(1);
        expect(newReport['highProfitSale']['salesman']).to.be.equal('Joaquim');
        expect(newReport['sellers']).to.be.an('array');
        expect(newReport['sellers']).to.have.length(4);
        expect(newReport['worstSeller'].name).to.be.equal('Felipe');
        expect(newReport['worstSeller'].profit).to.be.equal(100.67);
    });
});