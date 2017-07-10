(function() {
  function TodoItem($firebaseArray) {
    var ref = firebase.database().ref().child("todoitems");
    var todoitems = $firebaseArray(ref);

    function addtodo (name) {
      todoitems.$add(name);
    }

    return {
      all: todoitems
    };
  }

  angular
    .module('blocitoffAngular')
    .factory('TodoItem', ['$firebaseArray', TodoItem]);
})();
