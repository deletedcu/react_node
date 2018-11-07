const express = require('express');
let router = express.Router();

const getAllProducts = require('./product').getAllProducts;

/**
 * Returns all products
 * 
 */
router.get('/all', (request, response) => {
  getAllProducts(request)
    .then(res => {
      response.status(res.status).json({ products: res.products });
    })
    .catch(err => {
      response.status(err.status).json({ message: err.message });
    });
});

module.exports = router;
