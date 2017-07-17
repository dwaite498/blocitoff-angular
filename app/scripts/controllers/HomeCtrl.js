(function() {
    function HomeCtrl(TodoItem) {
      this.todoItem = TodoItem.all;
      this.newitem = "";
      this.submit = function() {
          TodoItem.addtodo(this.newitem);
      };

      this.oldestDate = Date.now() - 86400000;


    }

    angular
        .module('blocitoffAngular')
        .controller('HomeCtrl',  ['TodoItem', HomeCtrl]);
})();
