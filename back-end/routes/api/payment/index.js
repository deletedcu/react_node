const express = require('express');
let router = express.Router();

const payWithStripe = require('./payment').payWithStripe;

/**
 * Pay order with stripe
 * 
 */
router.post('/stripe', (request, response) => {
  payWithStripe(request)
    .then(res => {
      response.status(res.status).json({ message: res.message });
    })
    .catch(err => {
      response.status(err.status).json({ message: err.message });
    });
});

module.exports = router;
