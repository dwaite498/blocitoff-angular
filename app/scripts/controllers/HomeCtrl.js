(function() {
    function HomeCtrl($scope, $firebaseArray) {
      console.log('loading controller')

      var todoItem = firebase new('https://blocitoffangular.firebaseio.com/')

      $scope.todoItem = $firebaseArray(todoItem);
    }


    angular
        .module('blocitoffAngular')
        .controller('HomeCtrl', ['$scope', '$firebaseArray', HomeCtrl]);
})();
