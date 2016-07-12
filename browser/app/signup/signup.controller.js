app.controller('SignupCtrl', function($scope, SignupFactory) {

  $scope.submitSignup = function() {
    SignupFactory.submitSignup($scope.email, $scope.password);
  }
})
