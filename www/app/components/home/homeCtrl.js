(function() {
    'use strict';
    angular.module('myApp').controller('HomeController', ['$scope', function($scope) {
        $scope.toggleLeft = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };
    }])
})();
