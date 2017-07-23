(function() {
  function ExpiredItemsCtrl(TodoItem) {
    this.todoItem = TodoItem.all;

    this.shouldHide = function(item) {
        var sevenDaysAgo = moment().subtract(1, "week")
        return moment(item.created_at).isSameOrAfter(sevenDaysAgo)
    };

  }
  angular
  .module('blocitoffAngular')
  .controller('ExpiredItemsCtrl',  ['TodoItem', ExpiredItemsCtrl]);
})();
