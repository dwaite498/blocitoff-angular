(function() {
    function TimeSinceExpiration() {
        return function(created_at) {
            var created_at_moment = moment(created_at)
            var expires_at_moment = created_at_moment.add(1, "week");
            return moment().to(expires_at_moment)
        }
    }

    angular
        .module('blocitoffAngular')
        .filter('TimeSinceExpiration', TimeSinceExpiration)
})();
