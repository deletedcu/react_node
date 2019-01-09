const express = require('express');
let router = express.Router();
const mailSender = require('../../../helpers/mailSender');
const config = require('../../../config/config');

router.post('/', (request, response) => {
  const { name, email, message } = request.body

  const subject = 'Customer tries to contact you';
  const body = `Name: ${name}<br/>Email: ${email}<br/>Message: ${message}<br/><br/>`;

  mailSender(config.admin_email, subject, body)
    .then(res => {
      response.status(200).json({ message: 'Email has been sent' });
    })
    .catch(err => {
      response.status(500).json({ message: 'Failed to send email' });
    });
});

module.exports = router;
 