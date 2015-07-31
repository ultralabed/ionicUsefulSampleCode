angular.module('app.ngStorageCtrl', ['ngStorage'])

.controller('NgStorageCtrl', function($localStorage, $sessionStorage) {
	var vm = this;
	vm.saveToStorage = saveToStorage;
	if($localStorage.counter === undefined){
		vm.listData = 0;
	}
	function saveToStorage() {
		if($localStorage.counter === undefined){
			$localStorage.$default({
				counter : 1
			})
			vm.listData = $localStorage.counter;
		}
		else {
			$localStorage.counter = $localStorage.counter + 1;
			vm.listData = $localStorage.counter;
		}
		vm.newText = "";
	}
})
