'use strict';

const cnpj = 1;
const businessName = 2;
const businessArea = 3;

function customer(data) {
    return {
        cnpj: data[cnpj],
        businessName: data[businessName],
        businessArea: data[businessArea],
        type: 'customer'
    }
}

module.exports = customer;