const express = require('express');
let router = express.Router();

const addProductToCart = require('./cart').addProductToCart;
const getCart = require('./cart').getCart;

/**
 * Get cart
 * 
 */
router.get('/', (request, response) => {
  getCart(request)
    .then(res => {
      response.status(res.status).json({ cart: res.cart });
    })
    .catch(err => {
      response.status(err.status).json({ message: err.message });
    });
});

/**
 * Add product to cart
 * 
 */
router.post('/add', (request, response) => {
  addProductToCart(request)
    .then(res => {
      response.status(res.status).json({ cart: res.cart });
    })
    .catch(err => {
      response.status(err.status).json({ message: err.message });
    });
});

module.exports = router;
