(function() {
    function HomeCtrl(TodoItem) {
      this.todoItem = TodoItem.all;
      this.newitem = "real data";
      this.submit = function() {
          TodoItem.addtodo(this.newitem);
      };

    }

    angular
        .module('blocitoffAngular')
        .controller('HomeCtrl',  ['TodoItem', HomeCtrl]);
})();
