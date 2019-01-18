const express = require('express');
let router = express.Router();

const getOrderHistory = require('./order').getOrderHistory;
const getOrder = require('./order').getOrder;
const rateOrder = require('./order').rateOrder;

/**
 * Get order history
 * 
 */
router.get('/', (request, response) => {
  getOrderHistory(request)
    .then(res => {
      response.status(res.status).json({ order_history: res.order_history });
    })
    .catch(err => {
      response.status(err.status).json({ message: err.message });
    });
});

/**
 * Get an order
 * 
 */
router.get('/info/:id', (request, response) => {
  getOrder(request)
    .then(res => {
      response.status(res.status).json({ order: res.order });
    })
    .catch(err => {
      response.status(err.status).json({ message: err.message });
    });
});

/**
 * Rate order
 * 
 */
router.post('/rate', (request, response) => {
  rateOrder(request)
    .then(res => {
      response.status(res.status).json({ message: res.message });
    })
    .catch(err => {
      response.status(err.status).json({ message: err.message });
    });
});

module.exports = router;
