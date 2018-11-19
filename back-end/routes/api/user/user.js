const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const config = require('../../../config/config');
const Moltin = require('../../../helpers/moltin');
const User = require('../../../models/user');

const checkToken = require('../../../helpers/checkToken');

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
            shipping_address: user.shipping_address,
            phone: user.phone,
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

      // create customer
      Moltin.Customers.Create({
        name: `${firstName} ${lastName}`,
        email: email,
      }).then(customer => {
        // create user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const user = {
          email: email,
          email_lowercased: email.toLowerCase(),
          hashed_password: hash,
          first_name: firstName,
          last_name: lastName,
          zip: zip,
          customer_id: customer.data.id,
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
      }).catch(err => {
        console.log(err);
        reject({ status: 500, message: 'Internal server error ...' });
      });
    });
  });
}

/**
 * Authenticate request(token) and retrieve user info
 * @param {*} request 
 */
exports.authenticate = (request) => {
  return new Promise((resolve, reject) => {
    const email = checkToken(request);

    if (email) {
      User.findOne({ email: email }).exec((err, user) => {
        if (err) {
          reject({ status: 500, message: 'Internal server error ...' });
          return;
        }
  
        if (!user) {
          reject({ status: 404, message: 'User not found!' });
          return;
        }
  
        resolve({
          status: 200,
          user: {
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            shipping_address: user.shipping_address,
            phone: user.phone,
            zip: user.zip,
            token: jwt.sign(email, config.jwtSecret, {}),
          },
        });
      });
    } else {
      reject({ status: 401, message: 'Unauthorized request!'});
    }
  });
}

/**
 * Update user's profile
 * @param {*} request 
 */
exports.updateProfile = (request) => {
  return new Promise((resolve, reject) => {
    const currentEmail = checkToken(request);

    if (currentEmail) {
      let { first_name, last_name, email, phone, shipping_address, password } = request.body;
      let user = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        email_lowercased: email.toLowerCase(),
        phone: phone,
        shipping_address: shipping_address,
      };

      if (password) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        user.hashed_password = hash;
      }

      User.findOneAndUpdate(
        { email_lowercased: currentEmail.toLowerCase() },
        user,
        {
          new: true,
        },
        (err, newUser) => {
          if (err) {
            console.log(err);
            reject({ status: 500, message: 'Internal server error ...' });
          } else {
            resolve({
              status: 200,
              message: 'User has been updated',
              user: {
                email: newUser.email,
                first_name: newUser.first_name,
                last_name: newUser.last_name,
                shipping_address: newUser.shipping_address,
                phone: newUser.phone,
                zip: newUser.zip,
                token: jwt.sign(newUser.email, config.jwtSecret, {}),
              }
            })
          }
        });
    } else {
      reject({ status: 401, message: 'Unauthorized request!'});
    }
  });
}