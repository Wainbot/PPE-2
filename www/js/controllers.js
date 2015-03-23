angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
    $scope.history = [
        { date: '27/11/2014', results: 64 },
        { date: '29/11/2014', results: 9  },
        { date: '29/11/2014', results: 1  },
        { date: '08/12/2014', results: 11 },
        { date: '27/12/2014', results: 26 },
        { date: '01/01/2015', results: 42 },
        { date: '01/01/2015', results: 0 },
        { date: '06/02/2015', results: 86 }
    ]
});
