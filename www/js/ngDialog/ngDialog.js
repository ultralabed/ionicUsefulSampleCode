angular.module('app.ngDialogCtrl', ['ngDialog'])

.controller('NgDialogCtrl', function($scope, ngDialog) {
	var vm = this;
	vm.openNgDialog = openNgDialog;
	function openNgDialog() {
		ngDialog.open({
		  template: 'js/ngDialog/ngDialog.popup.html',
		  controller: ['$scope', function() {
		  	//Wrtie ngDialog controller code here.
		  }]
		})
	}
})
