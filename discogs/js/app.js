'use strict';

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
