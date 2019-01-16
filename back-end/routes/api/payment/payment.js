const Moltin = require('../../../helpers/moltin');
const checkToken = require('../../../helpers/checkToken');
const config = require('../../../config/config');
const User = require('../../../models/user');
const Order = require('../../../models/order');

exports.payWithStripe = (request) => {
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

        const { order_id, token } = request.body;

        Moltin.Orders.Payment(order_id, {
          gateway: 'stripe',
          method: 'purchase',
          payment: token,
        })
        .then(() => {
          Order.findOneAndUpdate(
            { order_id: order_id },
            {
              status: 'complete',
            },
            (err, updatedOrder) => {
              if (err) {
                console.log(err);
                reject({ status: 500, message: 'Internal Server Error...' });
              } else {
                resolve({ status: 200, message: 'Successfully processed payment'});
              }
            });
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
