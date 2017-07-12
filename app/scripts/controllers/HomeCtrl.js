(function() {
    function HomeCtrl(TodoItem) {
      this.todoItem = TodoItem.validTodos;
      this.newitem = "";
      this.submit = function() {
          TodoItem.addtodo(this.newitem);
      };




    }

    angular
        .module('blocitoffAngular')
        .controller('HomeCtrl',  ['TodoItem', HomeCtrl]);
})();
