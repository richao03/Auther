'use-strict';

app.config(function($stateProvider) {
  $stateProvider.state('logout', {
    url: '/logout',
    controller: 'LogoutCtrl'
  })
})
