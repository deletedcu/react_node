const jwt = require('jsonwebtoken');
const config = require('../config/config');

/**
 * Check access token's validity
 * @param {*} request 
 */
module.exports = (request) => {
  let token = request.headers['x-access-token'];
  if (token) {
    try {
      let decoded = jwt.verify(token, config.jwtSecret);
      return decoded;
    } catch (err) {
      console.log(err);
      return null;
    }
  } else {
    return null;
  }
}
