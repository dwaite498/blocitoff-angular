(function() {
  function TodoItem($firebaseArray) {
    var ref = firebase.database().ref().child("todoitems");
    var todoitems = $firebaseArray(ref);
    function addtodo(name) {
      var date = Date.now();
      var expireDate = date + 604800000;
      console.log(date, expireDate, name)
      todoitems.$add({name: name, created_at: date, expires_at: expireDate});
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
