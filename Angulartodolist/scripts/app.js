angular.module("todoListApp", [])
.controller('mainCtrl', function($scope) {
	$scope.helloWorld = function() {
		console.log("Hello there! This is the helloWorld controller function, in the mainCtrl");
	};
})

.controller('promoCtrl', function($scope){
  $scope.iAmMoz = function() {
  	console.log("Hello, my name is Moses!");
  };

  $scope.helloWorld = function() {

  	console.log("This is not mainCtrl");
  }

})
.controller("imASibling", function($scope) {
	$scope.foobar = 1234;

	//enter in some other things!
});;