    /*global angular*/
    (function() {
        'use strict';
        angular.module('myApp')
        .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
            $stateProvider.state('home',{
                url:'/home',
                templateUrl:'app/components/home/home.html'
            }
                );
            $urlRouterProvider.otherwise('/home');
        }]);
    }());
