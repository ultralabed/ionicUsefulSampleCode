angular.module('app.ngQrCtrl', ['ja.qr'])

.controller('NgQrCtrl', function($scope) {
	var vm = this;
	vm.qrCodeString = '1';
	vm.addOneToQrCode = addOneToQrCode;
	function addOneToQrCode() {
		vm.qrCodeString  = vm.qrCodeString + 1;
	}
})
