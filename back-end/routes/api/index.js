const express = require('express');
const router = express.Router();

const user = require('./user');
const product = require('./product');
const cart = require('./cart');
const payment = require('./payment');
const order = require('./order');
const contact = require('./contact');

router.use('/user', user);
router.use('/product', product);
router.use('/cart', cart);
router.use('/payment', payment);
router.use('/order', order);
router.use('/contact', contact);

router.get('/', function (req, res) {
  res.render('index', { title: 'Api' });
});

module.exports = router;
