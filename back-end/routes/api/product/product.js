const Moltin = require('../../../helpers/moltin');
const checkToken = require('../../../helpers/checkToken');
const config = require('../../../config/config');

exports.getAllProducts = (request) => {
  return new Promise((resolve, reject) => {
    if (checkToken(request)) {
      Moltin.Products.With(['main_image', 'files']).All()
        .then(products => {
          resolve({ status: 200, products: products });
        })
        .catch(err => {
          console.log(err);
          reject({ status: 500, message: 'Internal Server Error!'});
        });
    } else {
      reject({ status: 401, message: 'Unauthorized request!'});
    }
  });
}
