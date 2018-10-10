const express = require('express');
const router = express.Router();

const user = require('./user');

router.use('/user', user);

router.get('/', function (req, res) {
  res.render('index', { title: 'Api' });
});

module.exports = router;
