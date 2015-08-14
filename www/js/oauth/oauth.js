angular.module('app.oauthCtrl', [])

.controller('OauthCtrl', function($scope, $cordovaOauth, $http) {
	var CLIENT_ID = '240304041143-q7cfa9a17kktq9uo0g4ai90apss3qkbl.apps.googleusercontent.com';
	var GOOGLE_AUTH_USERINFO_EMAIL = 'https://www.googleapis.com/auth/userinfo.email';
	var GOOGLE_GET_USERINFO = 'https://www.googleapis.com/oauth2/v1/userinfo?access_token=' ;
	var vm = this;
	vm.googleLoginTitle = "Google Login"
	vm.googleLogin = googleLogin;
	vm.getUserEmail = getUserEmail;

	function googleLogin() {
	 	$cordovaOauth.google(CLIENT_ID, [GOOGLE_AUTH_USERINFO_EMAIL])
		  .then(function(result) {
		  	// alert('google login success')
	  		vm.googleLoginTitle = "Logout and Login again."
        vm.token = result.access_token;
        vm.tokenType = result.token_type;
        vm.expiresIn = result.expires_in;
        vm.errorCode = "No Error. "

        //Example of getting the login user email by google api.
        getUserEmail();
	    }, function(error) {
	    		// alert('google login error')
	    	  vm.googleLoginTitle = "Google Login";
	        console.log(error);
	       	vm.errorCode = "Error is : " + JSON.stringify(error);
	    });
	}
	function getUserEmail() {
		$http.get(GOOGLE_GET_USERINFO + vm.token)
		  .then(function(response) {
		  	vm.userInfo = response;
		  },
		  function(error) {
	  		vm.errorCode = "Error is : " + JSON.stringify(error);
		  })
	}
})
