(function() {
    function TodoItem($firebaseArray) {
      var ref = firebase.database().ref().child("todoitems");
      var todoitems = $firebaseArray(ref);

    function addtodo(name) {
      var date = moment().format();
      console.log(date, name);
      todoitems.$add({name: name, created_at: date, completed: false});
    };

    function markComplete() {
      todoitems.$loaded().then(function() {
        todoitem.complete = true;
      });
    };


    return {
      all: todoitems,
      addtodo: addtodo,
      markComplete : markComplete
    };
  }

  angular
    .module('blocitoffAngular')
    .factory('TodoItem', ['$firebaseArray', TodoItem]);
})();
