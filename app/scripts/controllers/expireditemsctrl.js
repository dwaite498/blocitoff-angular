(function() {
  function ExpiredItemsCtrl(TodoItem) {
    this.todoItem = TodoItem.all;

      this.oldestDate = Date.now() - 86400000;

  }
  angular
  .module('blocitoffAngular')
  .controller('ExpiredItemsCtrl',  ['TodoItem', ExpiredItemsCtrl]);
})();
