'use strict';

app.controller('LoginCtrl', function($scope, LoginFactory) {
  var currentUser;

  $scope.submitLogin = function() {
    LoginFactory.submitLogin($scope.email, $scope.password)
  }

  $scope.getCurrentUser = function() {
    var currentUser = LoginFactory.getCurrentUser()
    // .then(function(user) {
    //   currentUser = user;
    // })
    console.log(currentUser)
  }

})
