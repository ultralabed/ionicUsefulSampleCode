angular.module('app.ngNotificationCtrl')
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app.ngNotification', {
    url: '/ngNotification',
    views: {
      'menuContent': {
        templateUrl: 'js/ngNotification/ngNotification.html',
        controller: 'NgNotificationCtrl as vm'
      }
    }
  });
});