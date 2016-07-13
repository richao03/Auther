app.controller('LogoutCtrl', function($scope, LogoutFactory) {
  $scope.logout = function() {
        console.log("Logging out from controller")
       LogoutFactory.submitLogout();
      }
})
