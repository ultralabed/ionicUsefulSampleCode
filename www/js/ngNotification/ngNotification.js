angular.module('app.ngNotificationCtrl', [])

.controller('NgNotificationCtrl', function($scope, $rootScope, $ionicPlatform, $cordovaLocalNotification) {
	var vm = this;
	vm.pushNotification = pushNotification;
	function pushNotification() {
	    $cordovaLocalNotification.schedule({
	      id: 1,
	      title: 'Notification',
	      text: 'You create a notification'
	    }).then(function (result) {
      	// Do what you want after trigger.
	    }, function() {
	    	alert('notification failed')
	    });
	  };
  $rootScope.$on('$cordovaLocalNotification:click',
  	function (event, notification, state) {
  		//Do what you want when user click notification
  	}
  );
})
