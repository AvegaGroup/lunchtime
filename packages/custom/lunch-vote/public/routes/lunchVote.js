'use strict';

angular.module('mean.lunch-vote').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('lunchVote example page', {
      url: '/lunchVote/example',
      templateUrl: 'lunch-vote/views/index.html'
    });
  }
]);
