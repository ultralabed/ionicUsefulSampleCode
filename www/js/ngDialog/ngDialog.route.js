angular.module('app.ngDialogCtrl')
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app.ngDialog', {
    url: '/ngDialog',
    views: {
      'menuContent': {
        templateUrl: 'js/ngDialog/ngDialog.html',
        controller: 'NgDialogCtrl as vm'
      }
    }
  });
});