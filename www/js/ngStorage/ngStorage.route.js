angular.module('app.ngStorageCtrl')
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app.ngStorage', {
    url: '/ngStorage',
    views: {
      'menuContent': {
        templateUrl: 'js/ngStorage/ngStorage.html',
        controller: 'NgStorageCtrl as vm'
      }
    }
  });
});