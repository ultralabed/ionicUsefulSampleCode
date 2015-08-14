angular.module('app.ngVibrateCtrl', [])

.controller('NgVibrateCtrl', function($scope, $cordovaVibration) {
	var vm = this;
	vm.clickVibrate = clickVibrate;
	function clickVibrate () {
		 $cordovaVibration.vibrate(100);
	}
})
