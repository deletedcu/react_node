const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const config = require('../../../config/config');
const Moltin = require('../../../helpers/moltin');
const User = require('../../../models/user');
const UserFeedback = require('../../../models/userFeedback');

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
            name: user.name,
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
 * @param {string} name
 * @param {string} zip
 */
exports.register = (email, password, name, zip) => {
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
        name: `${name}`,
        email: email,
      }).then(customer => {
        // create user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const user = {
          email: email,
          email_lowercased: email.toLowerCase(),
          hashed_password: hash,
          name: name,
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
                name: user.name,
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
            name: user.name,
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
      let { name, phone, shipping_address, email, zip } = request.body;
      let user = {
        email: email,
        name: name,
        phone: phone,
        shipping_address: shipping_address,
      };

      if (zip) {
        user.zip = zip;
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
                name: newUser.name,
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

/**
 * Update password
 * @param {*} request 
 */
exports.updatePassword = (request) => {
  return new Promise((resolve, reject) => {
    const currentEmail = checkToken(request);
    const { new_password } = request.body;

    if (currentEmail) {
      User.findOne({ email_lowercased: currentEmail.toLowerCase() }).exec((err, user) => {
        // something went wrong
        if (err) {
          reject({ status: 500, message: 'Internal server error ...' });
          return;
        }
  
        // user not exists
        if (!user) {
          reject({ status: 404, message: 'Cannot find user!' });
          return;
        }
  
        // user exists ...
        const hashedPassword = user.hashed_password;
  
        // compare password
        if (true) {
          const salt = bcrypt.genSaltSync(10);
          const hash = bcrypt.hashSync(new_password, salt);
          const new_hashed_password = hash;
    
          User.findOneAndUpdate(
            { email_lowercased: currentEmail.toLowerCase() },
            {
              hashed_password: new_hashed_password,
            },
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
                    name: newUser.name,
                    shipping_address: newUser.shipping_address,
                    phone: newUser.phone,
                    zip: newUser.zip,
                    token: jwt.sign(newUser.email, config.jwtSecret, {}),
                  }
                })
              }
            });
        } else {
          // incorrect password
          reject({ status: 401, message: 'Password is not correct!' });
        }
      });
    } else {
      reject({ status: 401, message: 'Unauthorized request!'});
    }
  });
}

/**
 * Save user's feedback
 * @param {*} request 
 */
exports.rate = (request) => {
  return new Promise((resolve, reject) => {
    let email = checkToken(request);  
    
    if (email) {
      User.findOne({ email: email }).exec((err, user) => {
        if (err) {
          reject({ status: 500, message: 'Internal server error ...' });
          return;
        }
  
        if (!user) {
          reject({ status: 401, message: 'Unauthorized request!' });
          return;
        }

        const { rate, feedback, canReply } = request.body; 

        new UserFeedback({
          user: user,
          rate: rate,
          feedback: feedback,
          canReply: canReply,
        }).save(err => {
          if (err) {
            console.log(err);
            reject({ status: 500, message: 'Internal Server Error' });
          } else {
            resolve({ status: 200, message: 'Feedback has been saved'});
          }
        });
      });
    } else {
      reject({ status: 401, message: 'Unauthorized request!'});
    }
  });
}
