angular.module('app.ngQrCtrl')
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app.ngQr', {
    url: '/ngQr',
    views: {
      'menuContent': {
        templateUrl: 'js/ngQr/ngQr.html',
        controller: 'NgQrCtrl as vm'
      }
    }
  });
});