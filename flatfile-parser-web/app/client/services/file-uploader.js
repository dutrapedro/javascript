'use strict';

angular
    .module('App')
    .service('fileUploader', fileUploader);

fileUploader.$inject = ['$http'];

function successCallback(data) {
    alert('Arquivo carregado');
}

function failureCallback(data) {
    alert( "Cannot post data: " + data);
}

function fileUploader($http) {
    let vm = this;
    vm.upload = (file) => {
        let request = {
            method: 'POST',
            url: 'localhost:3000/parseFile',
            headers: {
                'Content-Type': 'text/plain'
            },
            data: file
        }
        $http(request).then(successCallback);
    }
}
