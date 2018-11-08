import axios from 'axios'
import config from '../../config/config'
import { showNotification } from '../../services/notification'

export function fetchAllProducts(){
  return function(dispatch) {
    dispatch({type: 'SHOW_OVERLAY_SPINNER'})
    dispatch({type: 'FETCH_ALL_PRODUCTS'})

    axios.request({
      url: '/product/all',
      baseURL: config.apiBaseUrl,
      method: 'get',
    }).then((response) => {
      dispatch({type: 'FETCH_ALL_PRODUCTS_FULFILLED', payload: response.data.products})
      dispatch({type: 'HIDE_OVERLAY_SPINNER'})
    })
    .catch((err) => {
      if (err.response) {
        showNotification(err.response.data.message, 'error')
      } else {
        showNotification('Failed to fetch products', 'error')
      }

      dispatch({type: 'FETCH_ALL_PRODUCTS_REJECTED', payload: err})
      dispatch({type: 'HIDE_OVERLAY_SPINNER'})
    })
  }
}
