(function() {
    function HomeCtrl(TodoItem) {
      this.todoItem = TodoItem.all;
      this.newitem = "";
      this.submit = function() {
          TodoItem.addtodo(this.newitem);
      };

    }

    angular
        .module('blocitoffAngular')
        .controller('HomeCtrl',  ['TodoItem', HomeCtrl]);
})();
