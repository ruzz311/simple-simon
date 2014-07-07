'use strict';

/**
 * @ngdoc function
 * @name simpleSimonApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the simpleSimonApp
 */
angular.module('simpleSimonApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
