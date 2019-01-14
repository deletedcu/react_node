import config from '../config/config'
import axios from 'axios'
import urlEncode from 'form-urlencoded'

const getStripeToken = (cardNumber, expiryDate, cvc) => {
  return new Promise((resolve, reject) => {
    const expiryMonth = expiryDate.split('/')[0].replace(/\s/g, '')
    const expiryYear = expiryDate.split('/')[1].replace(/\s/g, '')

    const params = {
      card: {
        number: cardNumber,
        exp_month: expiryMonth,
        exp_year: expiryYear,
        cvc: cvc,
      },
    }

    axios.post('https://api.stripe.com/v1/tokens', urlEncode(params), {
      headers: { 
        'Authorization': 'Bearer ' + config.stripePublishableKey,
        'content-type': 'application/x-www-form-urlencoded',
      }
    })
    .then(res => {
      resolve(res.data.id)
    })
    .catch(err => {
      reject(err)
    })
  })
}

export default getStripeToken
