const express = require('express');
let router = express.Router();

const getOrderHistory = require('./order').getOrderHistory;

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

module.exports = router;
