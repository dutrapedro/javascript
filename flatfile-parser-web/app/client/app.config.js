'use strict';

angular
    .module('App')
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/parseFile', {
            templateUrl: './client/parser/parser.html',
            controller: 'ParserController'
        })
        .otherwise({
            templateUrl: './client/parser/parser.html',
            controller: 'ParserController'
        });
}