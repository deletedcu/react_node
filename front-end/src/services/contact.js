import config from '../config/config'
import axios from 'axios'

export const contact = (params) => {
  return new Promise((resolve, reject) => {
    axios.request({
      url: '/contact',
      baseURL: config.apiBaseUrl,
      method: 'post',
      data: params,
    }).then((response) => {
      resolve(response.data)
    }).catch((err) => {
      console.log(err)
      reject(err)
    })
  })
}
