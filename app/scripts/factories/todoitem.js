(function() {
    function TodoItem($firebaseArray) {
      var ref = firebase.database().ref().child("todoitems");
      var todoitems = $firebaseArray(ref);
    console.log(todoitems);
      
    function addtodo(name) {
      var date = moment().format();
      todoitems.$add({name: name, created_at: date, completed: false});
    }

    function markComplete(task) {
        if (task.completed == true) {
          task.completed = false;
        }
        else {
          task.completed = true;
        }
      todoitems.$save(task);
    }


    return {
      all: todoitems,
      addtodo: addtodo,
      markComplete: markComplete
    };
  }

  angular
    .module('blocitoffAngular')
    .factory('TodoItem', ['$firebaseArray', TodoItem]);
})();
