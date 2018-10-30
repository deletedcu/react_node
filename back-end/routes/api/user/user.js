const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const config = require('../../../config/config');
const User = require('../../../models/user');

/**
 * Login Function
 * @param {string} email 
 * @param {string} password 
 */
exports.login = (email, password) => {
  return new Promise((resolve, reject) => {
    // check if user exists or not
    User.findOne({ email_lowercased: email.toLowerCase() }).exec((err, user) => {
      // something went wrong
      if (err) {
        reject({ status: 500, message: 'Internal server error ...' });
        return;
      }

      // user not exists
      if (!user) {
        reject({ status: 404, message: 'Cannot find email address!' });
        return;
      }

      // user exists ...
      const hashedPassword = user.hashed_password;

      // compare password
      if (bcrypt.compareSync(password, hashedPassword)) {
        // correct user
        resolve({
          status: 200,
          user: {
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            zip: user.zip,
            token: jwt.sign(email, config.jwtSecret, {}),
          },
        });
      } else {
        // incorrect password
        reject({ status: 401, message: 'Password is not correct!' });
      }
    })
  });
}

/**
 * Sign up Function
 * @param {string} email 
 * @param {string} password 
 * @param {string} firstName 
 * @param {string} lastName 
 * @param {string} zip
 */
exports.register = (email, password, firstName, lastName, zip) => {
  return new Promise((resolve, reject) => {
    // check if user already exists
    User.findOne({ email_lowercased: email.toLowerCase() }).exec((err, matchingUser) => {
      // something went wrong
      if (err) {
        reject({ status: 500, message: 'Internal server error ...' });
        return;
      }

      // user already exists
      if (matchingUser) {
        reject({ status: 409, message: 'User with same email already exists!'});
        return;
      }

      // user not exists
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      // create user
      const user = {
        email: email,
        email_lowercased: email.toLowerCase(),
        hashed_password: hash,
        first_name: firstName,
        last_name: lastName,
        zip: zip,
      };

      new User(user).save((err) => {
        if (err) {
          // something went wrong
          console.log(err);
          reject({ status: 500, message: 'Internal server error ...' });
        } else {
          // user has been created
          resolve({
            status: 200,
            message: 'User has been registered!',
            user: {
              email: user.email,
              email_lowercased: user.email_lowercased,
              first_name: user.first_name,
              last_name: user.last_name,
              zip: user.zip,
              token: jwt.sign(user.email, config.jwtSecret, {}),
            },
          });
        }
      });
    });
  });
}
