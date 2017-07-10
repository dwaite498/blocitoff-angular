(function() {
    function HomeCtrl(Todoitem) {
      home = this
      this.todoItem = Todoitem.all;
    }

    angular
        .module('blocitoffAngular')
        .controller('HomeCtrl',  ['Todoitem', HomeCtrl]);
})();
