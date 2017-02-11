'use strict';

const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;
const fs = require('fs');
const resourcesPath = __dirname+'/../resources/resources.json';
const resourcesEncoding = 'utf8';
const linesMock = JSON.parse(fs.readFileSync(resourcesPath, resourcesEncoding));
const lineValidator = require('../../app/transform/line-validator');
const saleItemValidator = require('../../app/transform/sale-item-validator');
const transformLine = require('../../app/transform/line-transformer');

describe('Line Validator', () => {

    it('expect #validate() return false when line = \"\"(empty)', () => {
        expect(lineValidator.validate(linesMock['line-invalid-empty'])).to.be.false;
    });

    it('expect #validate() return false when line = null', () => {
        expect(lineValidator.validate(linesMock['line-invalid-null'])).to.be.false;
    });

    it('expect #validate() return false when line = '+linesMock['line-invalid-random1'], () => {
        expect(lineValidator.validate(linesMock['line-invalid-random1'])).to.be.false;
    });

    it('expect #validate() return true when line = '+linesMock['line-valid-seller'], () => {
        expect(lineValidator.validate(linesMock['line-valid-seller'])).to.be.true;
    });

    it('expect #validate() return false when line = '+linesMock['line-invalid-seller-invalid'], () => {
        expect(lineValidator.validate(linesMock['line-invalid-seller-invalid'])).to.be.false;
    });

    it('expect #validate() return true when line = '+linesMock['line-invalid-sale'], () => {
        expect(lineValidator.validate(linesMock['line-invalid-sale'])).to.be.false;
    });

    it('expect #validate() return false when line = '+linesMock['line-invalid-random3'], () => {
        expect(lineValidator.validate(linesMock['line-invalid-random3'])).to.be.false;
    });

    it('expect #validate() return true when line = '+linesMock['line-valid-customer'], () => {
        expect(lineValidator.validate(linesMock['line-valid-customer'])).to.be.true;
    });

    it('expect #validate() return false when line = '+linesMock['line-invalid-random4'], () => {
        expect(lineValidator.validate(linesMock['line-invalid-random4'])).to.be.false;
    });

    it('expect #validate() return false when line = '+linesMock['line-invalid-random5'], () => {
        expect(lineValidator.validate(linesMock['line-invalid-random5'])).to.be.false;
    }); 
    
});


describe('Sale Item Validator', () => {
    
    it('expect #validate return false when item = \"\"(empty)'+linesMock['item-invalid-empty-split'], () => {
        expect(saleItemValidator.validate(linesMock['item-invalid-empty-split'])).to.be.false;
    });

    it('expect #validate return false when item = '+linesMock['item-invalid-random1-split'], () => {
        expect(saleItemValidator.validate(linesMock['item-invalid-random1-split'])).to.be.false;
    });

    it('expect #validate return false when item = '+linesMock['item-invalid-random2-split'], () => {
        expect(saleItemValidator.validate(linesMock['item-invalid-random2-split'])).to.be.false;
    });

    it('expect #validate return false when item = '+linesMock['item-invalid-random3-split'], () => {
        expect(saleItemValidator.validate(linesMock['item-invalid-random3-split'])).to.be.false;
    });

    it('expect #validate return false when item = '+linesMock['item-invalid-random4-split'], () => {
        expect(saleItemValidator.validate(linesMock['item-invalid-random4-split'])).to.be.false;
    });

    it('expect #validate return false when item = '+linesMock['item-invalid-random5-split'], () => {
        expect(saleItemValidator.validate(linesMock['item-invalid-random5-split'])).to.be.false;
    });

    it('expect #validate return false when item = '+linesMock['item-invalid-null-split'], () => {
        expect(saleItemValidator.validate(linesMock['item-invalid-null-split'])).to.be.false;
    });

    it('expect #validate return true when item = '+linesMock['item-valid-approach1-split'], () => {
        expect(saleItemValidator.validate(linesMock['item-valid-approach1-split'])).to.be.true;
    });

    it('expect #validate return true when item = '+linesMock['item-valid-approach2-split'], () => {
        expect(saleItemValidator.validate(linesMock['item-valid-approach2-split'])).to.be.true;
    });

    it('expect #validate return true when item = '+linesMock['item-valid-approach3-split'], () => {
        expect(saleItemValidator.validate(linesMock['item-valid-approach3-split'])).to.be.true;
    });

    it('expect #validate return true when item = '+linesMock['item-valid-approach4-split'], () => {
        expect(saleItemValidator.validate(linesMock['item-valid-approach4-split'])).to.be.true;
    });
    
});


describe('Transform', () => {
    
    it('expect #transform() return a seller model = '+linesMock['valid-seller-row'], () => {
        let seller = transformLine(linesMock['valid-seller-row']);
        expect(seller.name).to.be.equal('Ricardo Nathan');
        expect(seller.cpf).to.be.equal('79999602762');
        expect(seller.salary).to.be.equal('2050');
    });
    
});


