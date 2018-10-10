import axios from 'axios'
import config from '../../config/config'
import { showNotification } from '../../services/notification'

export function loginUser(email, password){
  return function(dispatch) {
    axios.request({
      url: '/user/login',
      baseURL: config.apiBaseUrl,
      method: 'post',
      auth: {
        username: email,
        password: password,
      }
    }).then((response) => {
      showNotification('Successfully logged in', 'success')

      localStorage.setItem('token', response.data.user.token)
      dispatch({type: 'LOGIN_USER_FULFILLED', payload: response.data.user})
    })
    .catch((err) => {
      if (err.response.data) {
        showNotification(err.response.data.message, 'error')
      } else {
        showNotification('Failed to login', 'error')
      }

      dispatch({type: 'LOGIN_USER_REJECTED', payload: err})
    })
  }
}

export function signupUser(user) {
  return function(dispatch) {
    axios.request({
      url: '/user/register',
      baseURL: config.apiBaseUrl,
      method: 'post',
      data: user,
    }).then((response) => {
      showNotification('Successfully registered', 'success')

      localStorage.setItem('token', response.data.user.token)
      dispatch({type: 'SIGNUP_USER_FULFILLED', payload: response.data.user})
    }).catch((err) => {
      if (err.response.data) {
        showNotification(err.response.data.message, 'error')
      } else {
        showNotification('Failed to sign up', 'error')
      }

      dispatch({type: 'SIGNUP_USER_REJECTED', payload: err})
    })
  }
}
