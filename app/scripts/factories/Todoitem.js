(function() {
  function Todoitem($firebaseArray) {
    var ref = firebase.database().ref().child("todoitems");
    var todoitems = $firebaseArray(ref);

    var Todoitem = {};

    Todoitem.all = todoitems;

    return Todoitem;
  }

  angular
    .module('blocitoffAngular')
    .factory('Todoitem', ['$firebaseArray', Todoitem]);
})();
