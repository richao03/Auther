app.controller('SignupCtrl', function($scope, $http, $state) {

  $scope.submitSignup = function() {
    console.log("clicked")
        $http.post('/signup', {email: $scope.email, password: $scope.password})
        .then(function() {
          $state.go('stories')
        })
      }
})
