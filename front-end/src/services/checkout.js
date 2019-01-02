import config from '../config/config'
import axios from 'axios'

import { groupBy } from '../utils'

const checkout = (token, items, billing, cardToken) => {
  return new Promise((resolve, reject) => {  
    let order_id = ''

    removeCart(token)
      .then(res => {
        let addProductTasks = [];
        let groupedItems = groupBy(items, 'id')
        for (let [id, products] of Object.entries(groupedItems)) {
          addProductTasks.push(addProductToCart(token, id, products.length))
        }
        return Promise.all(addProductTasks)
      })
      .then(res => {
        return axios.request({
          url: '/cart/checkout',
          baseURL: config.apiBaseUrl,
          method: 'post',
          headers: {
            'x-access-token': token,
          },
          data: {
            billing: billing,
          }
        })
      })
      .then(res => {
        order_id = res.data.order.data.id
        return processPayment(token, order_id, cardToken)
      })
      .then(res => {
        resolve(order_id)
      })
      .catch(err => {
        console.log(err)
        reject(err.response.data.message || 'Failed to process your order')
      })
  })
}

const removeCart = (token) => {
  return new Promise((resolve, reject) => {
    axios.request({
      url: '/cart/remove',
      baseURL: config.apiBaseUrl,
      method: 'post',
      headers: {
        'x-access-token': token,
      },
    }).then((res) => {
      resolve(res)
    })
    .catch((err) => {
      reject(err)
    })
  })
}

const addProductToCart = (token, product_id, quantity) => {
  return new Promise((resolve, reject) => {
    axios.request({
      url: '/cart/add',
      baseURL: config.apiBaseUrl,
      method: 'post',
      headers: {
        'x-access-token': token,
      },
      data: {
        product_id: product_id,
        quantity: quantity,
      }
    }).then((res) => {
      resolve(res)
    })
    .catch((err) => {
      reject(err)
    })
  })
}

const processPayment = (token, order_id, cardToken) => {
  return new Promise((resolve, reject) => {
    axios.request({
      url: '/payment/stripe',
      baseURL: config.apiBaseUrl,
      method: 'post',
      headers: {
        'x-access-token': token,
      },
      data: {
        order_id: order_id,
        token: cardToken,
      }
    }).then((res) => {
      resolve(res)
    })
    .catch((err) => {
      reject(err)
    })
  })
}

export default checkout
