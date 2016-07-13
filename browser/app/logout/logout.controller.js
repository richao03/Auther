app.controller('LogoutCtrl', function($scope, LogoutFactory) {
  $scope.submitLogout = function() {
       Session.clear();
      }
})
