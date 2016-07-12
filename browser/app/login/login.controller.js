'use strict';

app.controller('LoginCtrl', function($scope, $http, $stateParams) {


  $scope.submitLogin = function() {
        $http.post('/login', {email: $scope.email, password: $scope.password})
        .then(function() {
          console.log('sent everything')
        })
      }
})
