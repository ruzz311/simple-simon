'use strict';

/**
 * @ngdoc function
 * @name simpleSimonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simpleSimonApp
 */
angular.module('simpleSimonApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
