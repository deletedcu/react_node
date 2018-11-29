const Moltin = require('../../../helpers/moltin');
const checkToken = require('../../../helpers/checkToken');
const config = require('../../../config/config');
const User = require('../../../models/user');

exports.getCart = (request) => {
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

        if (!user.customer_id) {
          reject({ status: 403, message: 'User is not a registered customer!' });
          return;
        }

        Moltin.Cart(user.customer_id)
          .Items()
          .then(cart => {
            resolve({ status: 200, cart: transformCartInfo(cart)});
          })
          .catch(err => {
            console.log(err);
            reject({ status: err.errors[0].status, message: err.errors[0].detail});
          });
      });
    } else {
      reject({ status: 401, message: 'Unauthorized request!'});
    }
  });
}

exports.addProductToCart = (request) => {
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

        if (!user.customer_id) {
          reject({ status: 403, message: 'User is not a registered customer!' });
          return;
        }

        Moltin.Cart(user.customer_id)
          .AddProduct(request.body.product_id, request.body.quantity)
          .then(cart => {
            resolve({ status: 200, cart: transformCartInfo(cart) });
          })
          .catch(err => {
            console.log(err);
            reject({ status: err.errors[0].status, message: err.errors[0].detail});
          });
      });
    } else {
      reject({ status: 401, message: 'Unauthorized request!'});
    }
  });
}

exports.updateCart = (request) => {
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

        if (!user.customer_id) {
          reject({ status: 403, message: 'User is not a registered customer!' });
          return;
        }

        Moltin.Cart(user.customer_id)
          .UpdateItemQuantity(request.body.item_id, request.body.quantity)
          .then(cart => {
            resolve({ status: 200, cart: transformCartInfo(cart) });
          })
          .catch(err => {
            console.log(err);
            reject({ status: err.errors[0].status, message: err.errors[0].detail});
          });
      });
    } else {
      reject({ status: 401, message: 'Unauthorized request!'});
    }
  });
}

exports.removeCart = (request) => {
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

        if (!user.customer_id) {
          reject({ status: 403, message: 'User is not a registered customer!' });
          return;
        }

        Moltin.Cart(user.customer_id)
          .Delete()
          .then(cart => {
            resolve({ status: 200, cart: [] });
          })
          .catch(err => {
            console.log(err);
            reject({ status: err.errors[0].status, message: err.errors[0].detail});
          });
      });
    } else {
      reject({ status: 401, message: 'Unauthorized request!'});
    }
  });
}

exports.checkout = (request) => {
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

        if (!user.customer_id) {
          reject({ status: 403, message: 'User is not a registered customer!' });
          return;
        }

        const { billing } = request.body;

        Moltin.Cart(user.customer_id)
          .Checkout(user.customer_id, billing)
          .then(orders => {
            resolve({ status: 200, orders: orders });
          })
          .catch(err => {
            console.log(err);
            reject({ status: err.errors[0].status, message: err.errors[0].detail});
          });
      });
    } else {
      reject({ status: 401, message: 'Unauthorized request!'});
    }
  });
}

const transformCartInfo = (cart) => {
  let items = cart.data;
  let count = 0;
  items = items.map(item => {
    count = count + item.quantity;
    return {
      id: item.id,
      product_id: item.product_id,
      name: item.name,
      image: item.image.href,
      quantity: item.quantity,
    }
  });

  return {
    items: items,
    total_quantity: count,
    total_price: cart.meta.display_price.with_tax.formatted,
  }
}
