'use strict';

var appControllers = angular.module('appControllers', []);

appControllers.controller('detailsCtrl', ['$scope', '$http', 
    function($scope, $http) {
        $http.get('https://api.discogs.com/oauth/identity').success(function(data) {
            console.log(data);
        });
    }
]);
