'use strict';

var ACCESS_TOKEN = null;

var discogsApp = angular.module('discogsApp', [
    'ngRoute'
    , 'appControllers'
]);

discogsApp.config(['$routeProvider', 
    function($routeProvider) {
        $routeProvider.when('/details', {
            templateUrl: 'partials/details.html'
            , controller: 'detailsCtrl'
        });
    }
]);

discogsApp.filter('secure_url', function() {
    return function(input) {
        if (input.indexOf('https') !== 0) {
            input = input.replace('http', 'https');
        }
        return input;
    }
});
