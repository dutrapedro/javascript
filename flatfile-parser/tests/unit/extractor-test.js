'use strict';

const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;
const isValidFileExtension = require('../../app/file-extension-validator').isValidFileExtension;


describe('File Extension Validator', function () {
    
    it('expect #isValidFileExtension() return true when file extension is not null e equal to .dat', () => {
        let isValid = isValidFileExtension('/home/test/file.dat');
        expect(isValid).to.be.true;
    });

    it('expect #isValidFileExtension() return false when file extension is undefined', () => {
        let isValid = isValidFileExtension(undefined);
        expect(isValid).to.be.false;
    });

    it('expect #isValidFileExtension() return false when file extension is null', () => {
        let isValid = isValidFileExtension(null);
        expect(isValid).to.be.false;
    });

    it('expect #isValidFileExtension() return false when file extension is not .dat', () => {
        let isValid = isValidFileExtension('/home/test/file.txt');
        expect(isValid).to.be.false;
    });
    
});
