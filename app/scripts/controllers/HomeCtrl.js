(function() {
    function HomeCtrl($scope, TodoItem) {
      $scope.todoItem = TodoItem.all;
    }

    angular
        .module('blocitoffAngular')
        .controller('HomeCtrl',  ['$scope', 'TodoItem', HomeCtrl]);
})();
