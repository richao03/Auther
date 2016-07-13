'use strict';

var app = require('express')();
var path = require('path');
var session = require('express-session');
var User = require('../api/users/user.model');


app.use(require('./logging.middleware'));

app.use(session({
  // this mandatory configuration ensures that session IDs are not predictable
  secret: '!tongiscool' // or whatever you like
}));

app.use(require('./request-state.middleware'));

app.use(require('./statics.middleware'));

app.use('/api', require('../api/api.router'));

var value;




app.use(function (req, res, next) {
  next();
});

app.post('/login', function (req, res, next) {
  User.findOne({
    where: req.body
  })
  .then(function (user) {
    if (!user) {
      res.sendStatus(401);
    } else {

      req.session.userId = user.id;
              console.log("***********************", req.session.userId)
      value = user;
      res.sendStatus(204);
    }

  })
  .catch(next);
});

app.post('/signup', function (req, res, next) {
  User.create(req.body)
  .then(function (user) {
    res.status(201).json(user);
  })

  .catch(next);
});

app.put('/logout', function(req, res, next) {
  console.log("HELLOOOO!!")
  console.log(req.session.userId)
  req.session.userId = null;
  console.log(req.session.userId)
  value = null;
  res.sendStatus(200)
})

app.get('/currentuser', function(req,res,next) {
  console.log(value)
  res.json(value)
})


app.use('/api', function (req, res, next) {
  if (!req.session.counter) req.session.counter = 0;
  next();
});



var validFrontendRoutes = ['/', '/stories', '/users', '/stories/:id', '/users/:id', '/signup', '/login'];
var indexPath = path.join(__dirname, '..', '..', 'public', 'index.html');
validFrontendRoutes.forEach(function (stateRoute) {
  app.get(stateRoute, function (req, res) {
    res.sendFile(indexPath);
  });
});


app.use(require('./error.middleware'));

module.exports = app;
