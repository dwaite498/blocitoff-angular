(function() {
  function TodoItem($firebaseArray) {
    var ref = firebase.database().ref().child("todoitems");
    var todoitems = $firebaseArray(ref);
    var validTodos = [];
    function addtodo(name) {
      var date = new Date();
      var newDate = Date.parse(date);
      todoitems.$add({name: name, created_at: newDate});
    }


    return {
      all: todoitems,
      addtodo: addtodo
    };
  }

  angular
    .module('blocitoffAngular')
    .factory('TodoItem', ['$firebaseArray', TodoItem]);
})();
