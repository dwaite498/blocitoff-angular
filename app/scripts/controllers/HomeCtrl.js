(function() {
    function HomeCtrl(TodoItem) {
      this.todoItem = TodoItem.all;
      this.newitem = [];
      this.submit = function() {
          TodoItem.addtodo(this.newitem);
      };

      this.shouldShow = function(item) {
          var sevenDaysAgo = moment().subtract(1, "week")
          return moment(item.created_at).isAfter(sevenDaysAgo)&&item.completed === false;
      };

      this.markComplete = TodoItem.markComplete;
    }

    angular
        .module('blocitoffAngular')
        .controller('HomeCtrl',  ['TodoItem', HomeCtrl]);
})();
