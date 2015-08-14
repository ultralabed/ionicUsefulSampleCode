angular.module('app.ngQrCtrl', ['ja.qr'])

.controller('NgQrCtrl', function($scope, $cordovaBarcodeScanner) {
	var vm = this;
	vm.qrCodeString = '1';
	vm.addOneToQrCode = addOneToQrCode;
	vm.scanQrCode = scanQrCode;
	function addOneToQrCode() {
		vm.qrCodeString  = vm.qrCodeString + 1;
	}
	function scanQrCode () {
	  $cordovaBarcodeScanner
	    .scan()
	    .then(function(barcodeData) {
	    	alert(JSON.stringify(barcodeData));
	      // Success! Barcode data is here
	    }, function(error) {
	    	alert(JSON.stringify(error));
	      // An error occurred
	    });
	}
})
