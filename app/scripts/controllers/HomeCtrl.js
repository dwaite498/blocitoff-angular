(function() {
    function HomeCtrl(TodoItem) {
      this.todoItem = TodoItem.all;
      this.newitem = "";
      this.submit = function() {
          TodoItem.addtodo(this.newitem);
      };

      this.shouldHide = function(item) {
          var sevenDaysAgo = moment().subtract(1, "week")
          return moment(item.created_at).isBefore(sevenDaysAgo)
      };
    }

    angular
        .module('blocitoffAngular')
        .controller('HomeCtrl',  ['TodoItem', HomeCtrl]);
})();
