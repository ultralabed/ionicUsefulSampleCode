angular.module('app.oauthCtrl')
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app.oauth', {
    url: '/oauth',
    views: {
      'menuContent': {
        templateUrl: 'js/oauth/oauth.html'
      }
    }
  });
});