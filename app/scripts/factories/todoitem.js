(function() {
  function TodoItem($firebaseArray) {
    var ref = firebase.database().ref().child("todoitems");
    var todoitems = $firebaseArray(ref);
    var validTodos

    function addtodo(name) {
      var date = new Date();
      var newDate = Date.parse(date);
      todoitems.$add({name: name, created_at: newDate});
    }

    function filteredTodos() {

      for (var item in todoitems) {
      var then = todo.created_at.toDate(),
          now  = new Date().getTime(),
          sevenDaysInMilliseconds = 604800000;
      if (now - then < sevenDaysInMilliseconds) {
            validTodos << item;
          };
      }
        return validTodos;
    };

    return {
      all: todoitems,
      addtodo: addtodo,
      validTodos: validTodos
    };
  }

  angular
    .module('blocitoffAngular')
    .factory('TodoItem', ['$firebaseArray', TodoItem]);
})();
