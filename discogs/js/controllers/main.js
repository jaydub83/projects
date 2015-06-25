'use strict';

var appControllers = angular.module('appControllers', []);

appControllers.controller('mainCtrl', [
    '$scope'
    , '$http'
    , function($scope, $http) {
        // Load access token
        if (!ACCESS_TOKEN) {
            $http.get('token').success(function(data) {
                ACCESS_TOKEN = data;
            }).error(function() {
                alert("Token file not found - make sure it's in the same directory as the index.html file!");
            });
        }

        $scope.search = function(query) {
            $http.get('https://api.discogs.com/database/search?format=album&token=' + ACCESS_TOKEN + '&artist=' + query).success(function(data) {
                console.log(data);
                $scope.album_listing = data.results;
            });
        }
    }
]);

appControllers.controller('detailsCtrl', [
    '$scope'
    , '$http'
    , function($scope, $http) {
        $http.get('token').success(function(data) {
            console.log(data);
        });
    }
]);
