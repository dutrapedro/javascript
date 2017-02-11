'use strict';

const cpf = 1;
const name = 2;
const salary = 3;

function seller(data) {
    return {
        cpf: data[cpf],
        name: data[name],
        salary: data[salary],
        type: 'seller'
    }
}

module.exports = seller;