const auth = require('basic-auth');
const express = require('express');

const login = require('./user').login;
const register = require('./user').register;
const authenticate = require('./user').authenticate;
const updateProfile = require('./user').updateProfile;

let router = express.Router();

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
  let { email, password, first_name, last_name, zip } = request.body;
  
  if (!email || !password || !email.trim() || !password.trim()) {
    response.status(400).json({ message: 'Invalid request!'});
  } else {
    register(email, password, first_name, last_name, zip)
      .then(res => {
        response.status(res.status).json({ message: res.message, user: res.user });
      })
      .catch(err => {
        response.status(err.status).json({ message: err.message });
      });
  }
});

/**
 * Authenticate token => login user
 * 
 */
router.post('/authenticate_token', (request, response) => {
  authenticate(request)
    .then(res => {
      response.status(res.status).json({ message: res.message, user: res.user });
    })
    .catch(err => {
      response.status(err.status).json({ message: err.message });
    });
});

/**
 * Update profile
 * 
 */
router.post('/update_profile', (request, response) => {
  updateProfile(request)
    .then(res => {
      response.status(res.status).json({ message: res.message, user: res.user });
    })
    .catch(err => {
      response.status(err.status).json({ message: err.message });
    });
});

module.exports = router;
