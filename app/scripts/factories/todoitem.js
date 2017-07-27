(function() {
    function TodoItem($firebaseArray) {
      var ref = firebase.database().ref().child("todoitems");
      var todoitems = $firebaseArray(ref);
    console.log(todoitems);
      
    function addtodo(name) {
      console.log(name);
      var date = moment().format();
      todoitems.push({name: name, created_at: date, completed: false});
    }

    function markComplete(task) {
      console.log(task);
        if (task.complete == "true") {
          task.complete = "false";
        }
        else {
          task.complete = "true";
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
