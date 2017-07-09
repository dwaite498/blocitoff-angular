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
        templateURL: '/templates/home.html'
      });
  }

  angular
    .module('blocitoffAngular', ['ui.router', 'firebase'])
})();
