app.factory('LogoutFactory', function($http, $state, $stateParams) {
    return {
        submitLogout: function(){
                $state.go('home');
            })
          }
    }
})
