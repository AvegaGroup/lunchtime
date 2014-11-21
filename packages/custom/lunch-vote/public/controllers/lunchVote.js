'use strict';

angular.module('mean.lunch-vote').controller('LunchVoteController', ['$scope', 'Global', 'LunchVote',
  function($scope, Global, LunchVote) {
    $scope.global = Global;
    $scope.package = {
      name: 'lunch-vote'
    };
    $scope.restaurants = LunchVote.query();
  }
]);
