import config from '../config/config'
import axios from 'axios'

export const fetchOrderHistory = (token) => {
  return new Promise((resolve, reject) => {
    axios.request({
      url: '/order',
      baseURL: config.apiBaseUrl,
      method: 'get',
      headers: {
        'x-access-token': token
      }
    }).then((response) => {
      resolve(response.data)
    }).catch((err) => {
      console.log(err)
      reject(err)
    })
  })
}
