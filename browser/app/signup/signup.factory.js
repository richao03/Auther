'use-strict'

app.factory('SignupFactory', function($http) {
    return {
        submitSignup: function(email, password) {
            $http.post('/signup', { email: email, password: password })
                .then(function() {
                    $state.go('stories')
                })
        }

    }
})
