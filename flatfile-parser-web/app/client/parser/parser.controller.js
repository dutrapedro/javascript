'use strict';

angular
    .module('App')
    .controller('ParserController', ParserController);

ParserController.$inject = ['$scope', 'Upload', '$timeout', '$http'];

function ParserController($scope, Upload, $timeout, $http) {

    $scope.uploadFiles = (file, errFiles) => {
        $scope.f = file;
        $scope.errFile = errFiles && errFiles[0];
        if (file) {
            file.upload = Upload.upload({
                url: 'http://10.99.1.73:3000/parseFile',
                data: {file: file}
            });

            file.upload.then(function (response) {
                $timeout(function () {
                    file.result = response.data;
                });
            }, function (response) {
                if (response.status > 0)
                    $scope.errorMsg = response.status + ': ' + response.data;
            }, function (evt) {
                file.progress = Math.min(100, parseInt(100.0 * 
                                         evt.loaded / evt.total));
            });
        }
    }

}