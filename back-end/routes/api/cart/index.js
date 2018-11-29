const express = require('express');
let router = express.Router();

const addProductToCart = require('./cart').addProductToCart;
const updateCart = require('./cart').updateCart;
const getCart = require('./cart').getCart;
const removeCart = require('./cart').removeCart;
const checkout = require('./cart').checkout;

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

/**
 * Update cart (quantity)
 * 
 */
router.post('/update', (request, response) => {
  updateCart(request)
    .then(res => {
      response.status(res.status).json({ cart: res.cart });
    })
    .catch(err => {
      response.status(err.status).json({ message: err.message });
    });
});

/**
 * Empty cart
 * 
 */
router.post('/remove', (request, response) => {
  removeCart(request)
    .then(res => {
      response.status(res.status).json({ cart: res.cart });
    })
    .catch(err => {
      response.status(err.status).json({ message: err.message });
    });
});

/**
 * Checkout : convert cart to order
 * 
 */
router.post('/checkout', (request, response) => {
  checkout(request)
    .then(res => {
      response.status(res.status).json({ order: res.order });
    })
    .catch(err => {
      response.status(err.status).json({ message: err.message });
    });
});


module.exports = router;
