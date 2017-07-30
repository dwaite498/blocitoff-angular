(function() {
  function ExpiredItemsCtrl(TodoItem) {
    this.todoItem = TodoItem.all;

    this.hasExpired = function(item) {
        var sevenDaysAgo = moment().subtract(1, "week")
        return moment(item.created_at).isBefore(sevenDaysAgo)||item.completed === true;
    };

  }
  angular
  .module('blocitoffAngular')
  .controller('ExpiredItemsCtrl',  ['TodoItem', ExpiredItemsCtrl]);
})();
