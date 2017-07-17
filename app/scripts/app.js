(function() {
  function config($locationProvider, $stateProvider) {
    $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
              });

      $stateProvider
               .state('home', {
                   url: '/',
                   controller: 'HomeCtrl as home',
                   templateUrl: '/templates/home.html'
               })

               .state('expireditems', {
                 url: '/expireditems',
                 controller: 'ExpiredItemsCtrl as expired',
                 templateUrl: '/templates/expireditems.html'
               });
  }

  angular
    .module('blocitoffAngular', ['ui.router', 'firebase'])
    .config(config);
})();
