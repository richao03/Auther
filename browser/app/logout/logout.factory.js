app.factory('LogoutFactory', function($http, $state, $stateParams) {
  return {
    submitLogout: function() {
      console.log('logging out!!!!')
      $http.put('/logout')
      .then(function() {
        $state.go('home');
      })

    }
  }
})
