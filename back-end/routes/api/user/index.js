const auth = require('basic-auth');
const express = require('express');

const login = require('./user').login;
const register = require('./user').register;

var router = express.Router();

/**
 * Login
 * 
 */
router.post('/login', (request, response) => {
  const credentials = auth(request);

  if (!credentials) {
    response.status(400).json({ message: 'Invalid request!'});
  } else {
    login(credentials.name, credentials.pass)
      .then(res => {
        response.status(res.status).json({ user: res.user });
      })
      .catch(err => {
        response.status(err.status).json({ message: err.message });
      });
  }
});


/**
 * Register
 * 
 */
router.post('/register', (request, response) => {
  const email = request.body.email;
  const password = request.body.password;
  const firstName = request.body.first_name;
  const lastName = request.body.last_name;
  const zip = request.body.zip;
  
  if (!email || !password || !email.trim() || !password.trim()) {
    response.status(400).json({ message: 'Invalid request!'});
  } else {
    register(email, password, firstName, lastName, zip)
      .then(res => {
        response.status(res.status).json({ message: res.message, user: res.user });
      })
      .catch(err => {
        response.status(err.status).json({ message: err.message });
      });
  }
});

module.exports = router;
