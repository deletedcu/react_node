const express = require('express');
const router = express.Router();

const user = require('./user');
const product = require('./product');
const cart = require('./cart');
const payment = require('./payment');

router.use('/user', user);
router.use('/product', product);
router.use('/cart', cart);
router.use('/payment', payment);

router.get('/', function (req, res) {
  res.render('index', { title: 'Api' });
});

module.exports = router;
