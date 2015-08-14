angular.module('app.ngVibrateCtrl')
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app.ngVibrate', {
    url: '/ngVibrate',
    views: {
      'menuContent': {
        templateUrl: 'js/ngVibrate/ngVibrate.html',
        controller: 'NgVibrateCtrl as vm'
      }
    }
  });
});