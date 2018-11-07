const express = require('express');
const router = express.Router();

const user = require('./user');
const product = require('./product');

router.use('/user', user);
router.use('/product', product);

router.get('/', function (req, res) {
  res.render('index', { title: 'Api' });
});

module.exports = router;
