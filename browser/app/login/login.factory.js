'use-strict';

app.factory('LoginFactory', function($http, $state, $stateParams) {
  return {
    submitLogin: function(email, password){
      $http.post('/login', { email: email, password: password })
      .then(function() {
        $state.go('users');
      })
    },

    getCurrentUser: function() {
      $http.get('/currentuser')
      .then(function(user) {
        console.log(user)
        return user.data;
      })
    }
  }
})
