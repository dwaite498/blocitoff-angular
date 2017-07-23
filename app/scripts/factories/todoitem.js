(function() {
  function TodoItem($firebaseArray) {
    var ref = firebase.database().ref().child("todoitems");
    var todoitems = $firebaseArray(ref);
    function addtodo(name) {
      var date = moment().format();
      console.log(date, name);
      todoitems.$add({name: name, created_at: date});
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
