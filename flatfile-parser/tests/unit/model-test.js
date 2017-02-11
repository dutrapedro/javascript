'use strict';

const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;
const fs = require('fs');
const resourcesPath = __dirname+'/../resources/resources.json';
const resourcesEncoding = 'utf8';
const linesMock = JSON.parse(fs.readFileSync(resourcesPath, resourcesEncoding));
const saleData = require('../../app/model/sale');
const createItem = require('../../app/model/item');


describe('Item', () => {
    
    it('expect Item return 0,0,0 when = []'+linesMock['item-invalid-empty'], () => {
        let item = createItem(linesMock['item-invalid-empty']);
        expect(item.id).to.be.equal(0);
        expect(item.price).to.be.equal(0);
        expect(item.quantity).to.be.equal(0);
    });

    it('expect Item return 0,0,0 when = '+linesMock['item-invalid-null'], () => {
        let item = createItem(linesMock['item-invalid-null']);
        expect(item.id).to.be.equal(0);
        expect(item.price).to.be.equal(0);
        expect(item.quantity).to.be.equal(0);
    });

    it('expect Item return 0,0,0 when = '+linesMock['item-invalid-random1'], () => {
        let item = createItem(linesMock['item-invalid-random1']);
        expect(item.id).to.be.equal(0);
        expect(item.price).to.be.equal(0);
        expect(item.quantity).to.be.equal(0);
    });

    it('expect Item return 0,0,0 when = '+linesMock['item-invalid-random2'], () => {
        let item = createItem(linesMock['item-invalid-random2']);
        expect(item.id).to.be.equal(0);
        expect(item.price).to.be.equal(0);
        expect(item.quantity).to.be.equal(0);
    });


    it('expect Item return 0,0,0 when = '+linesMock['item-invalid-random3'], () => {
        let item = createItem(linesMock['item-invalid-random3']);
        expect(item.id).to.be.equal(0);
        expect(item.price).to.be.equal(0);
        expect(item.quantity).to.be.equal(0);
    });

    it('expect Item return 0,0,0 when = '+linesMock['item-invalid-random4'], () => {
        let item = createItem(linesMock['item-invalid-random4']);
        expect(item.id).to.be.equal(0);
        expect(item.price).to.be.equal(0);
        expect(item.quantity).to.be.equal(0);
    });

    it('expect Item return 0,0,0 when = '+linesMock['item-invalid-random5'], () => {
        let item = createItem(linesMock['item-invalid-random5']);
        expect(item.id).to.be.equal(0);
        expect(item.price).to.be.equal(0);
        expect(item.quantity).to.be.equal(0);
    });

    it('expect Item = '+linesMock['item-valid-approach1'], () => {
        let item = createItem(linesMock['item-valid-approach1']);
        expect(item.id).to.be.equal('1');
        expect(item.price).to.be.equal(0.20);
        expect(item.quantity).to.be.equal(320);
    });

    it('expect Item = '+linesMock['item-valid-approach2'], () => {
        let item = createItem(linesMock['item-valid-approach2']);
        expect(item.id).to.be.equal('1');
        expect(item.price).to.be.equal(20);
        expect(item.quantity).to.be.equal(3.20);
    });

    it('expect Item = '+linesMock['item-valid-approach3'], () => {
        let item = createItem(linesMock['item-valid-approach3']);
        expect(item.id).to.be.equal('jlça1234%');
        expect(item.price).to.be.equal(3.20);
        expect(item.quantity).to.be.equal(3);
    });

    
});
