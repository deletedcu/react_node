import config from '../config/config'
import axios from 'axios'

export const rateOrder = (token, params) => {
  return new Promise((resolve, reject) => {
    axios.request({
      url: '/order/rate',
      baseURL: config.apiBaseUrl,
      method: 'post',
      headers: {
        'x-access-token': token
      },
      data: params,
    }).then((response) => {
      resolve(response.data)
    }).catch((err) => {
      console.log(err)
      reject(err)
    })
  })
}
