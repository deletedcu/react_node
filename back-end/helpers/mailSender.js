const nodemailer = require('nodemailer');
const config = require('../config/config');

module.exports = function(to, subject, body) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: config.website_email,
      pass: config.website_email_password,
    },
  });
  
  const mailOptions = {
    from: config.website_email,
    to: to,
    subject: subject,
    html: body
  };
  
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function(err, info) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(info);
      }
    });
  }); 
}
